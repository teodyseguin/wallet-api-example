'use strict';

const dbService = require('../../helpers/dbconnection'),
    mongoose = require('mongoose'),
    response = require('../../helpers/response-handler');

/**
 * Our Credit class which generates our schema for credits collection for the database
 */
class Credit {
    constructor() {
        let self = this;

        self.Schema = mongoose.Schema({
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user',
                required: true
            },
            balance: {
                type: Number
            }
        });

        let connection = dbService.getConnection();

        // we need to make sure that the connection has been
        // established, before we can use it, to generate our model
        if (connection) {
            self.Model = connection.model('credit', this.Schema);
        }
    }

    /**
     * Method for retrieving the instantiated mongoose model
     *
     * @returns
     *  returns the credit mongoose model
     */
    getCreditModel() {
        return this.Model;
    }

    /**
     * Method for retrieving the instantiated mongoose schema
     *
     * @returns {*}
     *  returns the credit mongoose schema
     */
    getCreditSchema() {
        return this.Schema;
    }
}

module.exports.Credit = Credit;
