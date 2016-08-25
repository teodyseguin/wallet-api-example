'use strict';

const responseHandler = require('../../services/response-handler'),
    UserModel = require('./user-model').UserModel;

class UserController {
    /**
     * Method to create a user account, and store it to the database
     *
     * @param req
     *  The request parameter
     * @param res
     *  The response parameter
     */
    create(req, res) {
        let userModel = new UserModel(),
            model = userModel.getUserModel();

        // I just want to make sure that a model is generated
        // and I don't want to continue when it is none
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
