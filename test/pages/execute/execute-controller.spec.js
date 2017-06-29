'use strict';

const controller = require('../../../server/pages/execute/execute-controller').ExecuteController,
    should = require('should'),
    sinon = require('sinon');

describe('Test Execute Page', function() {
    it('ExecuteController should have a method page()', function() {
        should.exists(controller.page);
    });

    it('page() should execute paypal payment execute API', function(done) {
        let mockRequest = {
                query: {
                    paymentId: '111111',
                    PayerID: '222222'
                }
            },
            mockResponse = {
                writeHead: sinon.spy(),
                write: sinon.spy(),
                end: sinon.spy()
            };

        controller.page(mockRequest, mockResponse);
        done();
    });
});
