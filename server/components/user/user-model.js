'use strict';

const dbService = require('../../services/dbconnection'),
    mongoose = require('mongoose');

class UserModel {
    constructor() {
        this.Schema = mongoose.Schema({
            email: {
                lowercase: true,
                match: [/^.+@.+\..+$/,
                    'Invalid email address. Emails must look something like "someone@email.com."'],
                require: [true, '{PATH} is required.'],
                type: String,
                message: 'Invalid email address! Please .....',
                unique: 'This email has already been registered. Please use another email.'
            },
            name: {
                required: true,
                type: String
            },
            password: {
                minlength: [8, '{PATH} is too short (minimum is {MINLENGTH} characters).'],
                required: [true, '{PATH} is required'],
                type: String
            }
        });

        let connection = dbService.getConnection();

        if (connection) {
            this.Model = connection.model('user', this.Schema);
        }
    }

    getUserModel() {
        return this.Model;
    }
}

module.exports.UserModel = UserModel;
