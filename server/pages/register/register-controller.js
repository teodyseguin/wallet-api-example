'use strict';

const path = require('path');

class RegisterController {
    page(req, res) {
        if (req.isAuthenticated()) {
            res.redirect('/load');
            return;
        }

        res.sendFile(path.join(__dirname + '/register.html'));
        return;
    }
}

module.exports.RegisterController = new RegisterController();
