'use strict';

const router = require('express').Router(),
    controller = require('./login-controller').LoginController;

router.get('/', controller.page);

module.exports = router;