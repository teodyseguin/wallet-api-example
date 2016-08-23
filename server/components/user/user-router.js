'use strict';

const router = require('express').Router(),
    controller = require('./user-controller.js');

router.post('/', controller.create);

module.exports = router;
