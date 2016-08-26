'use strict';

const router = require('express').Router(),
    passport = require('passport');

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.json({
        message: 'User authenticated'
    });
});

router.get('/logout', function (req, res) {
    req.logout();
    res.status(200).json({
        status: 'ok',
        message: 'Logged out'
    });
});

module.exports = router;
