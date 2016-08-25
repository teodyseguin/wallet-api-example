'use strict';

const bcrypt = require('bcrypt'),
    dbService = require('../../services/dbconnection'),
    mongoose = require('mongoose'),
    work_factor = 10;

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

        this.Schema
            .pre('save', (next) => {
                let user = this;

                if (user.isModified('password')) {
                    bcrypt.genSalt(work_factor, (err, salt) => {
                        if (err) {
                            return next(err);
                        }

                        // hash the password along with our new salt
                        bcrypt.hash(user.password, salt, (err, hash) => {
                            if (err) {
                                return next(err);
                            }
                            // override the cleartext password with the hashed one
                            user.password = hash;
                            next();
                        });
                    });
                } else {
                    next();
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
