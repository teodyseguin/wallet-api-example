'use strict';

const controller = require('../../../server/components/credit/credit-controller').CreditController,
    dataconf = require('../../../server/config')['test'],
    dbService = require('../../../server/helpers/dbconnection'),
    should = require('should'),
    sinon = require('sinon');

describe('Testing Credit Component', function() {
    it('CreditController should have a method credit()', function() {
        should.exists(controller.credit);
    });

    it('credit() should execute paypal payment create API', function(done) {
        let mockRequest = {
                body: {
                    amount: 50,
                    currency: 'USD',
                    payment_method: 'paypal'
                }
            },
            mockResponse = {
                writeHead: sinon.spy(),
                write: sinon.spy(),
                end: sinon.spy()
            };

        controller.credit(mockRequest, mockResponse);
        done();
    });
});
