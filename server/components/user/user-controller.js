'use strict';

const responseHandler = require('../../services/response-handler'),
    UserModel = require('./user-model').UserModel;

class UserController {
    create(req, res, next) {
        var userModel = new UserModel();
        var model = userModel.getUserModel();

        if (model) {
            var user = new model(req.body);
            user.save(err => {
                responseHandler.printResponse(err, res, {});
            });
        }
    }
}

module.exports.UserController = new UserController();
