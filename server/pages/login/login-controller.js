'use strict';

const path = require('path');

class LoginController {
    login(req, res) {
        if (req.isAuthenticated()) {
            res.redirect('/load');
            return;
        }

        res.sendFile(path.join(__dirname + '/login.html'));
        return;
    }

    logout(req, res) {
        req.logout();
        res.redirect('/');
    }
}

module.exports.LoginController = new LoginController();
