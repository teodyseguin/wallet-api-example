'use strict';

const env = process.env.NODE_ENV || 'dev',
    dataconf = require('../config')[env];

class PaymentMethod {
    paypal(data) {
        return {
            intent: 'sale',
            payer: {
                payment_method: data.payment_method
            },
            redirect_urls: {
                return_url: dataconf.paypal_sdk.return_url,
                cancel_url: dataconf.paypal_sdk.cancel_url
            },
            transactions: [{
                amount: {
                    total: data.amount,
                    currency: data.currency
                },
                description: 'Paypal payment'
            }]
        };
    }
}

module.exports.PaymentMethod = PaymentMethod;
