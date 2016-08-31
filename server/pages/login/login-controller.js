'use strict';

const path = require('path');

class LoginController {
    page(req, res) {
        res.sendFile(path.join(__dirname + '/login.html'));
    }
}

module.exports.LoginController = new LoginController();
