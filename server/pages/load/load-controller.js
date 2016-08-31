'use strict';

const paypal = require('paypal-rest-sdk'),
    env = process.env.NODE_ENV || 'dev',
    dataconf = require('../../config')[env],
    path = require('path');

class LoadController {
    page(req, res) {
        // console.log(path.join(__dirname + '/pages/load-wallet.html'));
        res.sendFile(path.join(__dirname + '/load.html'));
    }
}

module.exports.LoadController = new LoadController();
