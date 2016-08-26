'use strict';

process.env.NODE_ENV = 'test';

const assert = require('assert'),
    dataconf = require('../../../server/config')['test'],
    dbService = require('../../../server/services/dbconnection'),
    should = require('should'),
    UserModel = require('../../../server/components/user/user-model').UserModel;

describe('Testing User Component', function() {
    let connectionOptions = {
            db: { native_parser: true },
            server: { poolSize: 5 },
            replset: { rs_name: 'myReplicaSetName' },
            user: dataconf.mongodb.username,
            pass: dataconf.mongodb.password,
            promiseLibrary: require('bluebird')
        };

    dbService.connect(
        dataconf.mongodb.host,
        dataconf.mongodb.dbname,
        dataconf.mongodb.port,
        connectionOptions,
        err => {}
    );

    let userModel = new UserModel(),
        model = userModel.getUserModel(),
        schema = userModel.getUserSchema();

    it('UserModel should have a method getUserModel()', function() {
        should.exists(userModel.getUserModel);
    });

    it('UserModel should have a method getUserSchema()', function() {
        should.exists(userModel.getUserSchema);
    });

    it('getUserSchema() should return the schema object', function() {
        assert.equal('object', typeof schema);
    });

    it('getUserModel() should return the model function', function() {
        assert.equal('function', typeof model);
    });
});
