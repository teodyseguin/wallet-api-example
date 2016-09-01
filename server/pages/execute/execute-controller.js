'use strict';

const paypal = require('paypal-rest-sdk'),
    response = require('../../helpers/response-handler'),
    service = require('../../components/credit/credit-service').CreditService;

/**
 * Our object class which serves as the execution page after successful
 * payment/checkout is made on paypal
 */
class ExecuteController {
    page(req, res) {
        let paymentId = req.query.paymentId,
            execute = { payer_id: req.query.PayerID },
            Credit = service.getCredit(),
            Model = Credit.getCreditModel();

        paypal.payment.execute(paymentId, execute, (err, payment) => {
            if (err) {
                response.printResponse(err, res, {});
            }
            else {
                if (Model) {
                    let amount = payment.transactions[0].amount.total;

                    service.setBalance(Model, req.user, amount, true, err => {
                        if (err) {
                            response.printResponse(err, res, {});
                            return;
                        }

                        res.redirect('/load');
                        return;
                    });
                }
            }
        });
    }
}

module.exports.ExecuteController = new ExecuteController();
