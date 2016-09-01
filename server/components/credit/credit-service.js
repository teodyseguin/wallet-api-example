'use strict';

const Credit = require('./credit-model').Credit;

let CreditObject = null;

let CreditService = {
    getCredit: function() {
        if (CreditObject == null) {
            CreditObject = new Credit();
            return CreditObject;
        }

        return CreditObject;
    },
    setBalance: function(model, user, payment, callback) {
        model.findOneAndUpdate(
            {
                _id: user._id
            },
            {
                user: user._id,
                balance: payment.transactions[0].amount.total
            },
            {
                upsert: true
            },
            (err, doc) => {
                if (err) {
                    return callback(err);
                }
                else {
                    return callback(null);
                }
            }
        )
    }
};

module.exports.CreditService = CreditService;
