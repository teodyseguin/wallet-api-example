'use strict';

const assert = require('assert'),
    service = require('../../../server/components/user/user-service').UserService,
    should = require('should');

describe('Testing User Component', function() {
    it('UserService should have a method getUser()', function() {
        should.exists(service.getUser);
    });

    it('getUser() should return a User object', function() {
        let user = service.getUser();

        assert.equal('object', typeof user);
        should.exists(user.getUserModel);
        should.exists(user.getUserSchema);
    });
});
