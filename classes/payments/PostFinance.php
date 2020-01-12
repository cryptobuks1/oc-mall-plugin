<?php

namespace OFFLINE\Mall\Classes\Payments;

use OFFLINE\Mall\Models\PaymentGatewaySettings;
use Omnipay\Omnipay;
use RainLab\Translate\Classes\Translator;
use Request;
use Session;
use Throwable;
use Validator;

/**
 * Process the payment via PostFinance.
 */
class PostFinance extends PaymentProvider
{
    /**
     * {@inheritdoc}
     */
    public function name(): string
    {
        return 'PostFinance';
    }

    /**
     * {@inheritdoc}
     */
    public function identifier(): string
    {
        return 'postfinance';
    }

    /**
     * {@inheritdoc}
     */
    public function validate(): bool
    {
        return true;
    }

    /**
     * {@inheritdoc}
     */
    public function process(PaymentResult $result): PaymentResult
    {
        $gateway = $this->getGateway();

        $response = null;
        try {
            $response = $gateway->purchase([
                'transactionId' => $result->order->id,
                'amount'        => $this->order->total_in_currency,
                'currency'      => $this->order->currency['code'],
                'returnUrl'     => $this->returnUrl(),
                'cancelUrl'     => $this->cancelUrl(),
                'notifyUrl'     => $this->cancelUrl(),
            ])->send();
        } catch (Throwable $e) {
            return $result->fail([], $e);
        }

        // PostFinance has to return a RedirectResponse if everything went well
        if ( ! $response->isRedirect()) {
            return $result->fail((array)$response->getData(), $response);
        }

        Session::put('mall.payment.callback', self::class);

        return $result->redirectResponse($response->getRedirectResponse());
    }

    /**
     * PostFinance has processed the payment and redirected the user back.
     *
     * @param PaymentResult $result
     *
     * @return PaymentResult
     */
    public function complete(PaymentResult $result): PaymentResult
    {
        $this->setOrder($result->order);

        return $result->success([], null);
    }

    /**
     * Build the Omnipay Gateway for PostFinance.
     *
     * @return \Omnipay\Common\GatewayInterface
     */
    protected function getGateway()
    {
        $gateway = Omnipay::create('Postfinance');
        $gateway->initialize([
            'pspId'         => PaymentGatewaySettings::get('postfinance_pspid'),
            'shaIn'         => PaymentGatewaySettings::get('postfinance_sha_in'),
            'shaOut'        => PaymentGatewaySettings::get('postfinance_sha_out'),
            'language'      => $this->transformLocale(Translator::instance()->getLocale() ?? 'en'),
            'hashingMethod' => PaymentGatewaySettings::get('postfinance_hashing_method'),
            'testMode'      => (bool)PaymentGatewaySettings::get('postfinance_test_mode'),
        ]);

        return $gateway;
    }

    /**
     * {@inheritdoc}
     */
    public function settings(): array
    {
        return [
            'postfinance_test_mode'      => [
                'label'   => 'offline.mall::lang.payment_gateway_settings.postfinance.test_mode',
                'comment' => 'offline.mall::lang.payment_gateway_settings.postfinance.test_mode_comment',
                'span'    => 'left',
                'type'    => 'switch',
            ],
            'postfinance_pspid'          => [
                'label' => 'offline.mall::lang.payment_gateway_settings.postfinance.pspid',
                'span'  => 'left',
                'type'  => 'text',
            ],
            'postfinance_hashing_method' => [
                'label'   => 'offline.mall::lang.payment_gateway_settings.postfinance.hashing_method',
                'comment' => 'offline.mall::lang.payment_gateway_settings.postfinance.hashing_method_comment',
                'default' => 'sha1',
                'span'    => 'left',
                'type'    => 'dropdown',
                'options' => [
                    'sha1'   => 'SHA-1',
                    'sha256' => 'SHA-256',
                    'sha512' => 'SHA-512',
                ],
            ],
            'postfinance_sha_in'         => [
                'label'   => 'offline.mall::lang.payment_gateway_settings.postfinance.sha_in',
                'comment' => 'offline.mall::lang.payment_gateway_settings.postfinance.sha_in_comment',
                'span'    => 'left',
                'type'    => 'text',
            ],
            'postfinance_sha_out'        => [
                'label'   => 'offline.mall::lang.payment_gateway_settings.postfinance.sha_out',
                'comment' => 'offline.mall::lang.payment_gateway_settings.postfinance.sha_out_comment',
                'span'    => 'left',
                'type'    => 'text',
            ],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function encryptedSettings(): array
    {
        return ['postfinance_pspid', 'postfinance_sha_in', 'postfinance_sha_out'];
    }

    /**
     * PostFinance requires a locale in the form of de_DE.
     * this method naively convert the two letter locale code
     * from RainLab.Translate to this form. This won't work
     * for every language, but should work most of the time.
     *
     * @param string $getLocale
     *
     * @return string
     */
    private function transformLocale(string $locale)
    {
        return sprintf("%s_%s", strtolower($locale), strtoupper($locale));
    }
}
