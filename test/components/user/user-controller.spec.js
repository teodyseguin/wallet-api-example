'use strict';

const controller = require('../../../server/components/user/user-controller').UserController,
    dataconf = require('../../../server/config')['test'],
    dbService = require('../../../server/helpers/dbconnection'),
    should = require('should'),
    sinon = require('sinon');

describe('Testing User Component', function() {
    it('UserController should have a method create()', function() {
        should.exists(controller.create);
    });

    it('create() should create a user account and store it to database', function(done) {
        let connectionOptions = {
                db: { native_parser: true },
                server: { poolSize: 5 },
                replset: { rs_name: 'myReplicaSetName' },
                user: dataconf.mongodb.username,
                pass: '',
                promiseLibrary: require('bluebird')
            },
            mockRequest = {
                body: {
                    email: 'angelicaseguin@gmail.com',
                    name: 'Angelica Seguin',
                    password: '123456789'
                }
            },
            mockResponse = {
                writeHead: sinon.spy(),
                write: sinon.spy(),
                end: sinon.spy()
            },
            res = {};

        dbService.connect(
            dataconf.mongodb.host,
            dataconf.mongodb.dbname,
            dataconf.mongodb.port,
            connectionOptions,
            err => {}
        );


        controller.create(mockRequest, mockResponse);
        done();
    });
});
