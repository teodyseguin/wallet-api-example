'use strict';

const config = require('../../config.json'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

class UserModel {
    constructor() {
        super();

        this.schema = new Schema({
            email: {
                lowercase: true,
                match: [/ ^.+@.+\..+$/,
                    'Invalid email address. Emails must look something like "someone@email.com.'],
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

        this.model = mongoose.model('user', this.schema);
    }

    getUserModel() {
        return this.model;
    }
}

module.exports.UserModel = new UserModel();
