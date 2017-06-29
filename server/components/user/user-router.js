'use strict';

const router = require('express').Router(),
    controller = require('./user-controller').UserController;

// When post /v1/wallet/api/users is called
router.post('/', controller.create);

module.exports = router;
