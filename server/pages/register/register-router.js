'use strict';

const router = require('express').Router(),
    controller = require('./register-controller').RegisterController;

router.get('/', controller.page);

module.exports = router;