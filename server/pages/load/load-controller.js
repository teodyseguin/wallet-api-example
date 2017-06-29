'use strict';

const path = require('path');

class LoadController {
    page(req, res) {
        res.sendFile(path.join(__dirname + '/load.html'));
    }
}

module.exports.LoadController = new LoadController();
