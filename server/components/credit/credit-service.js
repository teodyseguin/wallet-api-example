'use strict';

const Credit = require('./credit-model').Credit;

// this is going to be a cached object variable which
// will be referenced for succeeding calls to the credit mongoose model
let CreditObject = null;

let CreditService = {
    /**
     * This method serves as a singleton method. It make sure that an object
     * has been generated and then returns it. It regenerates the object if it's not
     *
     * @returns
     *  the CreditObject
     */
    getCredit: function() {
        if (CreditObject == null) {
            CreditObject = new Credit();
            return CreditObject;
        }

        return CreditObject;
    },
    /**
     * This method performs upsert feature (Update/Insert)
     *
     * @param model
     *  the credit model instance
     * @param user
     *  the user data, attached to the request, made by passport
     * @param payment
     *  the payment object returned by paypal after executing paypal.create API
     * @param callback
     *  our messenger function for response
     */
    setBalance: function(model, user, payment, increase, callback) {
        model.findOne(
            {
                user: user._id
            },
            (err, cr) => {
                if (err) {
                    return callback(err);
                }
                else {
                    if (!cr) {
                        let credit = new model({ user: user._id, balance: payment });

                        credit.save((err) => {
                            if (err) {
                                return callback(err);
                            }

                            return callback(null);
                        });
                    }
                    else {
                        let newBalance = 0;

                        if (increase === true) {
                            newBalance = parseInt(cr.balance) + parseInt(payment);
                        }
                        else {
                            newBalance = parseInt(cr.balance) - parseInt(payment);
                        }

                        model.update(
                            { user: user._id },
                            { balance: newBalance },
                            (err) => {
                                if (err) {
                                    return callback(err);
                                }

                                return callback(null);
                            }
                        );
                    }
                }
            }
        );
    }
};

module.exports.CreditService = CreditService;
