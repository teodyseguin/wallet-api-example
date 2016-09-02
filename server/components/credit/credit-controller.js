'use strict';

const env = process.env.NODE_ENV || 'dev',
    dataconf = require('../../config')[env],
    paypal = require('paypal-rest-sdk'),
    PaymentMethod = require('../../helpers/payment').PaymentMethod,
    response = require('../../helpers/response-handler'),
    service = require('./credit-service').CreditService;

class CreditController {
    credit(req, res) {
        let payment = new PaymentMethod(),
            method = req.body.payment_method,
            paymentObj = payment[method](req.body);

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

    retrieve(req, res) {
        let Credit = service.getCredit(),
            Model = Credit.getCreditModel();

        Model.findOne(
            {
                user: req.user._id
            },
            (err, cr) => {
                if (err) {
                    response.printResponse(err, res, {});
                    return;
                }
                else {
                    if (!cr) {
                        response.printResponse(null, res, {
                            balance: 0,
                            currency: '$'
                        });
                    }
                    else {
                        response.printResponse(null, res, {
                            balance: cr.balance,
                            currency: cr.currency
                        });
                    }
                }

                return;
            }
        );
    }
}

module.exports.CreditController = new CreditController();
