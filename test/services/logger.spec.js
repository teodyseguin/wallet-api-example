'use strict';

const logger = require('../../server/helpers/logger').logger,
    should = require('should'),
    sinon = require('sinon');

describe('Testing Logger service method', function() {
    it('logger() should print nothing and return false if environment is set to test', function() {
        let loggerMessage = 'logger text!',
            result = logger(loggerMessage);

        // On previous test files, the environment was already set to
        // 'test' and that has been inherited here in some way. Therefore
        // we can surely expect that logger() will return false and will
        // not print anything on the screen
        result.should.equal(false);
    });
});
