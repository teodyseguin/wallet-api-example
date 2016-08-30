'use strict';

const paypal = require('paypal-rest-sdk'),
    env = process.env.NODE_ENV || 'dev',
    dataconf = require('../../config')[env];

class CreditController {
    credit(req, res) {
        let paymentObj = {
            intent: 'sale',
            payer: {
                payment_method: 'paypal'
            },
            redirect_urls: {
                return_url: 'http://127.0.0.1:3000/execute',
                cancel_url: 'http://127.0.0.1:3000/cancel'
            },
            transactions: [{
                amount: {
                    total: 3,
                    currency: 'USD'
                },
                description: 'payment'
            }]
        };

        // load the paypal configuration and make use of it
        // from the succeeding procedures below
        paypal.configure(dataconf.paypal_sdk.api);

        paypal.payment.create(paymentObj, function(error, payment) {
            if (error) {
                console.log(error);
            }
            else {
                if (payment.payer.payment_method === 'paypal') {
                    let payerId;

                    for (var index = 0; index < payment.links.length; index++) {
                        if (payment.links[index].rel === 'approval_url') {

                        }
                    }
                }
            }
        });
    }
}

module.exports.CreditController = new CreditController();