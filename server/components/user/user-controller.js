'use strict';

const UserModel = require('./user-model').UserModel;

class UserController {
    create(req, res, next) {
        console.log('> create()');

        var userModel = new UserModel();
        var model = userModel.getUserModel();

        if (model) {
            var user = new model({email: 'someone@email.com', name: 'teody', password: 'thequickbrownfox'});
            user.save(err => {
                if (err) {
                    console.log(err);
                }
            });
        }
    }
}

module.exports.UserController = new UserController();
