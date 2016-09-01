'use strict';

const controller = require('../../../server/pages/login/login-controller').LoginController,
    should = require('should');

describe('Test Login Page', function() {
    it('LoginController should have a method login()', function() {
        should.exists(controller.login);
    });

    it('LoginController should have a method logout()', function() {
        should.exists(controller.logout);
    });
});
