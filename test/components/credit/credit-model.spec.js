'use strict';

process.env.NODE_ENV = 'test';

const assert = require('assert'),
    Credit = require('../../../server/components/credit/credit-model').Credit,
    dataconf = require('../../../server/config')['test'],
    dbService = require('../../../server/helpers/dbconnection'),
    should = require('should');

describe('Testing Credit Component', function() {
    let connectionOptions = {
            db: { native_parser: true },
            server: { poolSize: 5 },
            replset: { rs_name: 'myReplicaSetName' },
            user: dataconf.mongodb.username,
            pass: dataconf.mongodb.password,
            promiseLibrary: require('bluebird')
        },
        CreditObject = new Credit();

    it('Credit should have a method getCreditModel()', function() {
        should.exists(CreditObject.getCreditModel);
    });

    it('Credit should have a method getCreditSchema()', function() {
        should.exists(CreditObject.getCreditSchema);
    });

    dbService.connect(
        dataconf.mongodb.host,
        dataconf.mongodb.dbname,
        dataconf.mongodb.port,
        connectionOptions,
        err => {}
    );

    let model = CreditObject.getCreditModel(),
        schema = CreditObject.getCreditSchema();

    it('getCreditSchema() should return the schema object', function() {
        setTimeout(() => {
            assert.equal('object', typeof schema);
        }, 1000);
    });

    it('getCreditModel() should return the model function', function() {
        setTimeout(() => {
            assert.equal('function', typeof model);
        }, 1000);
    });
});
