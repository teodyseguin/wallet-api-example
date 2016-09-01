'use strict';

const router = require('express').Router(),
    passport = require('passport');

router.post('/', passport.authenticate('local'), function(req, res) {
    res.json({
        message: 'User authenticated'
    });
});

module.exports = router;
