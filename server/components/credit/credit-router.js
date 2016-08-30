'use strict';

const router = require('express').Router(),
    controller = require('./credit-controller').CreditController,
    authService = require('../auth/auth-service');

router.post('/', authService.ensureAuthenticated, controller.credit);

module.exports = router;
