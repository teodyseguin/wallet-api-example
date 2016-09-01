'use strict';

const env = process.env.NODE_ENV || 'dev',
    dataconf = require('../../config')[env],
    paypal = require('paypal-rest-sdk'),
    PaymentMethod = require('../../helpers/payment').PaymentMethod,
    response = require('../../helpers/response-handler');

class CreditController {
    constructor() {
        this.payment = new PaymentMethod();
    }

    credit(req, res) {
        let method = req.body.payment_method,
            paymentObj = this.payment[method](req.body);

        // load the paypal configuration and make use of it
        // from the succeeding procedures below
        paypal.configure(dataconf.paypal_sdk.api);

        paypal.payment.create(paymentObj, (error, payment) => {
            if (error) {
                response.printResponse(error, res, {});
            }
            else {
                if (payment.payer.payment_method === 'paypal') {
                    let redirectUrl;

                    for (var index = 0; index < payment.links.length; index++) {
                        if (payment.links[index].rel === 'approval_url') {
                            redirectUrl = payment.links[index].href;
                        }
                    }

                    response.printResponse(null, res, { redirect: redirectUrl });
                }
            }
        });
    }
}

module.exports.CreditController = new CreditController();
