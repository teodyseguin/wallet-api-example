'use strict';

process.env.NODE_ENV = 'test';

const env = process.env.NODE_ENV || 'test',
    dataconf = require('../../server/config')[env],
    dbService = require('../../server/helpers/dbconnection'),
    should = require('should'),
    sinon = require('sinon');

describe('Testing DB Connection service method', function() {
    it('connect() should open a connection', function(done) {
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
            err => {
                if (!err) {
                    done();
                }
            });
    });

    it('getConnection() should be able to return a connection', function(done) {
        let connection = dbService.getConnection();

        if (connection) {
            done();
        }
    });
});
