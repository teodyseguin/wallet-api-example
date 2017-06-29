'use strict';

const User = require('./user-model').User;
let UserObject = null;

/**
 * This is the service object to return the instantiated User object.
 * If the User object is not instantiated, it will instantiate it first
 * before sending it back to the requiring logic
 *
 * @returns
 *  The UserObject which holds the User model/schema
 */
let UserService = {
    getUser: function() {
        if (UserObject == null) {
            UserObject = new User();
            return UserObject;
        }

        return UserObject;
    }
};

module.exports.UserService = UserService;
