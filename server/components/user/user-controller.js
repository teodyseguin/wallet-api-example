'use strict';

const responseHandler = require('../../services/response-handler'),
    UserModel = require('./user-model').UserModel;

class UserController {
    create(req, res) {
        let userModel = new UserModel(),
            model = userModel.getUserModel();

        if (model) {
            let user = new model(req.body);
            user
                .save()
                .then(
                    function userResolution(u) {
                        responseHandler.printResponse(null, res, u);
                    },
                    function userRejection(err) {
                        responseHandler.printResponse(err, res, null);
                    }
                );
        }
    }
}

module.exports.UserController = new UserController();
