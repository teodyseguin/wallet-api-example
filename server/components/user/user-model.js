'use strict';

const bcrypt = require('bcrypt'),
    dbService = require('../../services/dbconnection'),
    mongoose = require('mongoose'),
    work_factor = 10;

class UserModel {
    constructor() {
        // Initialize the schema. We have some immediate validations going on here
        // especially for the email field, as we don't want to accept bogus like email
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

        // We are implementing pre-save process here to generate a salt password
        // equivalent, from the submitted password on the request
        this.Schema
            .pre('save', function(next) {
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

        // We want to make use of the cached connection, which actually
        // happens upon starting the app server, but there must be a
        // fallback, whenever there is no cached connection made
        let connection = dbService.getConnection();

        if (connection) {
            this.Model = connection.model('user', this.Schema);
        }
        // @TODO need to implement a fallback process
        // if cached connection is not made
    }

    /**
     * Method to retrieve the cached user model
     *
     * @see UserController.create() for understanding
     * the purpose of this method.
     *
     * @returns
     *  The generated model, which is essentially will become
     *  a document in the database
     */
    getUserModel() {
        return this.Model;
    }
}

module.exports.UserModel = UserModel;
