'use strict';

const env = process.env.NODE_ENV || 'dev',
    dataconf = require('../config')[env];

let connection = null,
    connectionOptions = {
        db: { native_parser: true },
        server: { poolSize: 5 },
        replset: { rs_name: 'myReplicaSetName' },
        user: dataconf.mongodb.username,
        pass: dataconf.mongodb.password,
        promiseLibrary: require('bluebird')
    },
    mongoose = require('mongoose');

/**
 * Function to establish a connection to the database
 *
 * @param callback
 *  The returned function which contains a specified response
 */
function connect(callback) {
    console.log('> Trying to connect now');

    connection = mongoose.createConnection(
        dataconf.mongodb.host,
        dataconf.mongodb.dbname,
        dataconf.mongodb.port,
        connectionOptions,
        function connectionError(err) {
            if (typeof callback === 'function') {
                if (err) {
                    return callback(err);
                }

                return callback(null);
            }
        });

    connection.on('error', console.error.bind(console, 'connection error:'));
}

/**
 * Retrieve the cached connection variable which can then be
 * reuse in succeeding database operation
 *
 * @returns connection
 *  The established connection from the database
 */
function getConnection() {
    if (connection == null) {
        console.log('> Opening new connection to MLab');
        return false;
    }

    console.log('> Returning the cached connection from MLab');
    return connection;
}

module.exports = {
    connect,
    getConnection
};
