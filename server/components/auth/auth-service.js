'use strict';

var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user.js');

module.exports = {
    localStrategy: new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, User.verifyMatch),
    serializeUser: function (user, done) {
        done(null, user._id);
    },
    deserializeUser: function (id, done) {
        User.findById({ _id: id }, '-password', function (error, user) {
            if (error) {
                done(error, null);
            } else {
                done(error, user);
            }
        });
    },
    ensureAuthenticated: function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        } else {
            return res.status(401).send();
        }
    }
};
