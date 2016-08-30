'use strict';

const LocalStrategy = require('passport-local').Strategy,
    UserService = require('../user/user-service').UserService;

let User = null,
    modelInstance = null;

function deserializeUser(id, callback) {
    modelInstance.findById(
        {
            _id: id
        },
        '-password',
        (err, user) => {
            if (err) {
                callback(err, null);
            }
            else {
                callback(err, user);
            }
        }
    );
}

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    else {
        return res.status(401).send();
    }
}

function localStrategy() {
    if (User == null) {
        User = UserService.getUser();
    }

    if (modelInstance == null) {
        modelInstance = User.getUserModel();
    }

    return new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, modelInstance.verifyMatch);
}

function serializeUser(user, done) {
    done(null, user._id);
}

module.exports = {
    deserializeUser,
    ensureAuthenticated,
    localStrategy,
    serializeUser
};
