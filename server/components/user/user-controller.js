'use strict';

const responseHandler = require('../../services/response-handler'),
    UserModel = require('./user-model').UserModel;

class UserController {
    constructor() {
        // Initially set this to null, but on succeeding calls, we need
        // to cache the value from here. The reason is to prevent
        // from getting the error of overwriting the model, which is
        // already been compiled by mongoose
        this.Model = null;
    }

    /**
     * Method to create a user account, and store it to the database
     *
     * @param req
     *  The request parameter
     * @param res
     *  The response parameter
     */
    create(req, res) {
        if (this.Model == null) {
            this.Model = new UserModel();
        }

        let modelInstance = this.Model.getUserModel();

        // I just want to make sure that a model is generated
        // and I don't want to continue when it is none
        if (modelInstance) {
            let user = new modelInstance(req.body);
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
