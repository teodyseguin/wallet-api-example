'use strict';

const dbService = require('../../helpers/dbconnection'),
    mongoose = require('mongoose'),
    response = require('../../helpers/response-handler');

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

        if (connection) {
            self.Model = connection.model('credit', this.Schema);
        }
    }

    getCreditModel() {
        return this.Model;
    }

    getCreditSchema() {
        return this.Schema;
    }
}

module.exports.Credit = Credit;
