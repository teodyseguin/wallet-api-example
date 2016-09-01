'use strict';

const controller = require('../../../server/pages/load/load-controller').LoadController,
    should = require('should');

describe('Test Load Page', function() {
    it('LoadController should have a method page()', function() {
        should.exists(controller.page);
    });
});
