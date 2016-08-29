'use strict';

const logger = require('./logger').logger,
    mongoose = require('mongoose');

let connection = null;

/**
 * Function to establish a connection to the database
 *
 * @param callback
 *  The returned function which contains a specified response
 */
function connect(host, dbname, port, options, callback) {
    logger('> Trying to connect now');

    connection = mongoose.createConnection(host, dbname, port, options, function connectionError(err) {
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
        logger('> Opening new connection to MLab');
        return false;
    }

    logger('> Returning the cached connection from MLab');
    return connection;
}

module.exports = {
    connect,
    getConnection
};
