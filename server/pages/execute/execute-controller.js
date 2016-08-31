'use strict';

const paypal = require('paypal-rest-sdk'),
    response = require('../../helpers/response-handler');

class ExecuteController {
    page(req, res) {
        let paymentId = req.query.paymentId,
            execute = { payer_id: req.query.PayerID };

        paypal.payment.execute(paymentId, execute, (err, payment) => {
            console.log(payment);

            if (err) {
                response.printResponse(err, res, {});
            }
            else {
                // store to database algorithm here
                res.redirect('/load');
            }
        });
    }
}

module.exports.ExecuteController = new ExecuteController();
