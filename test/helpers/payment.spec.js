'use strict';

const assert = require('assert'),
    PaymentMethod = require('../../server/helpers/payment').PaymentMethod,
    should = require('should');

describe('Test Payment Helper', function() {
    let payment;

    it('PaymentMethod should have a method paypal()', function() {
        payment = new PaymentMethod();
        should.exists(payment.paypal);
    });

    it('paypal() should return an object containing specific properties', function() {
        let mockRequest = {
                body: {
                    payment_method: 'paypal',
                    amount: 50,
                    currency: 'USD'
                }
            },
            resultObj = payment.paypal(mockRequest);

        assert.equal('object', typeof resultObj);
        should.exists(resultObj.intent);
        assert.equal('sale', resultObj.intent);
        should.exists(resultObj.payer);
        assert.equal('object', typeof resultObj.payer);
        should.exists(resultObj.redirect_urls);
        assert.equal('object', typeof resultObj.redirect_urls);
        should.exists(resultObj.transactions);
        assert.equal('object', typeof resultObj.transactions);
    });
});
