(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{224:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"order-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#order-model"}},[t._v("#")]),t._v(" Order model")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("Order")]),t._v(" model represents a customer's completed order.")]),t._v(" "),e("p",[t._v("A "),e("code",[t._v("Order")]),t._v(" model is created as soon as the customer hits the checkout button.\nThe order is persisted even if the payment fails. This enables a\ncustomer to retry the payment at any time.")]),t._v(" "),e("h2",{attrs:{id:"payment-id-for-offline-payments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#payment-id-for-offline-payments"}},[t._v("#")]),t._v(" Payment ID for offline payments")]),t._v(" "),e("p",[t._v("If you offer offline payments you might want to have a unique payment ID to\nidentify any incoming payments. This can be done using the "),e("code",[t._v("payment_hash")]),t._v(" attribute\non the Order model.")]),t._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$order")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$order")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("payment_hash")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"ng4gNkm5"')]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("The "),e("code",[t._v("payment_hash")]),t._v(" is presented to the shop admin on the orders backend page.")]),t._v(" "),e("h3",{attrs:{id:"display-offline-payment-info-in-checkout-mails"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-offline-payment-info-in-checkout-mails"}},[t._v("#")]),t._v(" Display offline payment info in checkout mails")]),t._v(" "),e("p",[t._v("Any payment instructions are by default rendered in the confirmation mails\nvia the "),e("code",[t._v("payment_state")]),t._v(" mail partial.")]),t._v(" "),e("p",[t._v("See "),e("router-link",{attrs:{to:"/digging-deeper/payments.html#specifying-payment-instructions"}},[t._v("Payment methods")]),t._v("\nfor further information on how to use payment instructions.")],1),t._v(" "),e("h2",{attrs:{id:"access-pricing-information"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#access-pricing-information"}},[t._v("#")]),t._v(" Access pricing information")]),t._v(" "),e("p",[t._v("You can access the following price relationships on the "),e("code",[t._v("Order")]),t._v(" model. Refer\nto the "),e("router-link",{attrs:{to:"/development/pricing-information.html"}},[t._v("pricing information")]),t._v(" page for more\ninformation on how to use these.")],1),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Relation")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("totalPreTaxes")]),t._v(" "),e("td",[t._v("Grand total before taxes")])]),t._v(" "),e("tr",[e("td",[t._v("totalTaxes")]),t._v(" "),e("td",[t._v("Grand total taxes")])]),t._v(" "),e("tr",[e("td",[t._v("totalPostTaxes")]),t._v(" "),e("td",[t._v("Grand total after taxes")])]),t._v(" "),e("tr",[e("td",[t._v("totalProductPreTaxes")]),t._v(" "),e("td",[t._v("Product total before taxes")])]),t._v(" "),e("tr",[e("td",[t._v("totalProductTaxes")]),t._v(" "),e("td",[t._v("Product total taxes")])]),t._v(" "),e("tr",[e("td",[t._v("totalProductPostTaxes")]),t._v(" "),e("td",[t._v("Product total after taxes")])]),t._v(" "),e("tr",[e("td",[t._v("totalShippingPreTaxes")]),t._v(" "),e("td",[t._v("Shipping cost before taxes")])]),t._v(" "),e("tr",[e("td",[t._v("totalShippingTaxes")]),t._v(" "),e("td",[t._v("Shipping cost taxes")])]),t._v(" "),e("tr",[e("td",[t._v("totalShippingPostTaxes")]),t._v(" "),e("td",[t._v("Shipping cost after taxes")])]),t._v(" "),e("tr",[e("td",[t._v("totalPaymentPreTaxes")]),t._v(" "),e("td",[t._v("Payment provider cost before taxes")])]),t._v(" "),e("tr",[e("td",[t._v("totalPaymentTaxes")]),t._v(" "),e("td",[t._v("Payment provider cost taxes")])]),t._v(" "),e("tr",[e("td",[t._v("totalPaymentPostTaxes")]),t._v(" "),e("td",[t._v("Payment provider cost after taxes")])])])]),t._v(" "),e("h2",{attrs:{id:"download-pdf-invoice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download-pdf-invoice"}},[t._v("#")]),t._v(" Download PDF invoice")]),t._v(" "),e("p",[t._v("To download a PDF invoice for an Order, use the "),e("code",[t._v("getPDFInvoice")]),t._v(" method to\nget a "),e("code",[t._v("Barryvdh\\DomPDF\\PDF")]),t._v(" instance.")]),t._v(" "),e("p",[t._v("Beware that only orders that have a "),e("router-link",{attrs:{to:"/digging-deeper/payments.html#pdf-invoices"}},[t._v("payment method with a\nvalid "),e("code",[t._v("pdf_partial")]),t._v(" assigned")]),t._v(" will support this feature.")],1),t._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pdf")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$order")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPDFInvoice")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pdf")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/path/invoice.pdf'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Save to disk")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pdf")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("stream")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Return download response")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pdf")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("output")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Return string representation")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);