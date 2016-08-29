'use strict';

const router = require('express').Router(),
    controller = require('./credit-controller').CreditController;

router.post('/:id/:amount', controller.create);

module.exports = router;
