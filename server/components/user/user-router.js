'use strict';

const router = require('express').Router(),
    controller = require('./user-controller').UserController;

router.post('/', controller.create);

module.exports = router;
