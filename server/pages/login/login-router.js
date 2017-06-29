'use strict';

const router = require('express').Router(),
    controller = require('./login-controller').LoginController;

router.get('/', controller.login);
router.get('/login', controller.login);
router.get('/logout', controller.logout);

module.exports = router;