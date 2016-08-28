'use strict';

const responseHandler = require('../../services/response-handler'),
    UserService = require('./user-service').UserService;

/**
 * This class is more on providing behavior to the User component.
 */
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
        let User = UserService.getUser(),
            modelInstance = User.getUserModel();

        // I just want to make sure that a model is generated
        // and I don't want to continue when it is none
        if (modelInstance) {
            let userModel = new modelInstance(req.body);
            userModel
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
