'use strict';

const response = require('../../helpers/response-handler'),
    service = require('../credit/credit-service').CreditService;

class DebitController {
    debit(req, res) {
        let Credit = service.getCredit(),
            Model = Credit.getCreditModel(),
            amount = req.body.amount;

        if (Model) {
            service.setBalance(Model, req.user, amount, false, err => {
                if (err) {
                    response.printResponse(err, res, {});
                    return;
                }

                res.redirect('/load');
                return;
            });
        }
    }
}

module.exports.DebitController = new DebitController();
