'use strict';

const responseHandler = require('../../server/services/response-handler'),
    should = require('should'),
    sinon = require('sinon');

describe('Testing Response Handler service method', function() {
    it('printResponse() should detect the error and write it back in JSON form', function() {
        let mockResponse =  {
                write: sinon.spy(),
                end: sinon.spy()
            },
            sampleErrorObject = {
                message: 'Invalid Email'
            };

        responseHandler.printResponse(sampleErrorObject, mockResponse);
        mockResponse
            .write
            .calledWith(JSON.stringify(sampleErrorObject))
            .should
            .equal(true);
    });

    it('printResponse() should detect the error and output it back', function() {
        let mockResponse = {
                write: sinon.spy(),
                end: sinon.spy()
            },
            sampleErrorObject = {
                message: 'Invalid Email'
            },
            result = responseHandler.printResponse(sampleErrorObject, mockResponse, {});

        result.should.have.property('error', true);
        result.should.have.property('message');
    });

    it('printResponse() should print back successful result', function() {
        let mockResponse = {
                writeHead: sinon.spy(),
                write: sinon.spy(),
                end: sinon.spy()
            },
            sampleDocs = {
                data: 'there is useful data'
            },
            result = responseHandler.printResponse(null, mockResponse, sampleDocs);

        mockResponse
            .writeHead
            .calledWith(200)
            .should
            .equal(true);

        mockResponse
            .write
            .calledWith(JSON.stringify(sampleDocs))
            .should
            .equal(true);

        result.should.have.property('error', false);
    });
});
