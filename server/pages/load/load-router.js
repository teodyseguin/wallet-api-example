'use strict';

const router = require('express').Router(),
    authService = require('../../components/auth/auth-service'),
    controller = require('./load-controller').LoadController;

router.get('/', authService.ensureAuthenticated, controller.page);

module.exports = router;
