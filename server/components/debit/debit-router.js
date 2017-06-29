'use strict';

const router = require('express').Router(),
    authService = require('../auth/auth-service'),
    controller = require('./debit-controller.js').DebitController;

router.post('/', authService.ensureAuthenticated, controller.debit);

module.exports = router;
