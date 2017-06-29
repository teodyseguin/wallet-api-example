'use strict';

const router = require('express').Router(),
    authService = require('../../components/auth/auth-service'),
    controller = require('./execute-controller').ExecuteController;

router.get('/', authService.ensureAuthenticated, controller.page);

module.exports = router;
