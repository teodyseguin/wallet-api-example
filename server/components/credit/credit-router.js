'use strict';

const router = require('express').Router(),
    authService = require('../auth/auth-service'),
    controller = require('./credit-controller').CreditController;

router.get('/', authService.ensureAuthenticated, controller.retrieve);
router.post('/', authService.ensureAuthenticated, controller.credit);

module.exports = router;
