'use strict';

process.env.NODE_ENV = 'test';

const authService = require('../../../server/components/auth/auth-service'),
    dataconf = require('../../../server/config')['test'],
    dbService = require('../../../server/helpers/dbconnection'),
    should = require('should'),
    sinon = require('sinon');

describe('Testing Auth Component', function() {
    it('Auth Service should have exposed deserializeUser()', function() {
        should.exists(authService.deserializeUser);
    });

    it('Auth Service should have exposed ensureAuthenticated()', function() {
        should.exists(authService.ensureAuthenticated);
    });

    it('ensureAuthenticated() should execute next() callback if authentication is true', function(done) {
        let mockRequest = {
                isAuthenticated: function() { return true }
            },
            mockResponse = {
                status: function(code) {
                    return {
                        send: function() {}
                    }
                }
            };

        authService.ensureAuthenticated(mockRequest, mockResponse, function() {
            done();
        });
    });

    it('Auth Service should have exposed localStrategy()', function() {
        should.exists(authService.localStrategy);
    });

    it('localStrategy() should return a Strategy Object', function() {
        let connectionOptions = {
            db: { native_parser: true },
            server: { poolSize: 5 },
            replset: { rs_name: 'myReplicaSetName' },
            user: dataconf.mongodb.username,
            pass: '',
            promiseLibrary: require('bluebird')
        };

        dbService.connect(
            dataconf.mongodb.host,
            dataconf.mongodb.dbname,
            dataconf.mongodb.port,
            connectionOptions,
            () => {
                let data = authService.localStrategy();

                data.should.have.property('_usernameField', 'email');
                data.should.have.property('_passwordField', 'password');
                data.should.have.property('name', 'local');
            }
        );
    });

    it('Auth Service should have exposed serializeUser()', function() {
        should.exists(authService.serializeUser);
    });
});
