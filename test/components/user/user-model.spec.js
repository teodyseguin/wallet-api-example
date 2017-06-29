'use strict';

process.env.NODE_ENV = 'test';

const assert = require('assert'),
    dataconf = require('../../../server/config')['test'],
    dbService = require('../../../server/helpers/dbconnection'),
    should = require('should'),
    User = require('../../../server/components/user/user-model').User;

describe('Testing User Component', function() {
    let connectionOptions = {
            db: { native_parser: true },
            server: { poolSize: 5 },
            replset: { rs_name: 'myReplicaSetName' },
            user: dataconf.mongodb.username,
            pass: dataconf.mongodb.password,
            promiseLibrary: require('bluebird')
        },
        UserObject = new User();

    it('User should have a method getUserModel()', function() {
        should.exists(UserObject.getUserModel);
    });

    it('User should have a method getUserSchema()', function() {
        should.exists(UserObject.getUserSchema);
    });

    dbService.connect(
        dataconf.mongodb.host,
        dataconf.mongodb.dbname,
        dataconf.mongodb.port,
        connectionOptions,
        err => {}
    );

    let model = UserObject.getUserModel(),
        schema = UserObject.getUserSchema();

    it('getUserSchema() should return the schema object', function() {
        setTimeout(() => {
            assert.equal('object', typeof schema);
        }, 1000);
    });

    it('getUserModel() should return the model function', function() {
        setTimeout(() => {
            assert.equal('function', typeof model);
        }, 1000);
    });
});
