'use strict';

const express = require('express'),
    userRouter = require('./components/user/user-router'),
    dbService = require('./services/dbconnection');

let app = express();

// app.use('/v1/wallet/api', function() {});

// API to create a user
app.use('/v1/wallet/api/users', userRouter);

// API to debit a specific user account balance
app.put('/v1/wallet/api/users/<id>/debit/<amount>', function() {});

// API to credit a specific user account balance
app.put('/v1/wallet/api/users/<id>/credit/<amount>', function() {});

// API to pull a specific user account balance
app.get('/v1/wallet/api/users/<id>/balance', function() {});

(function() {
    if (!dbService.getConnection()) {
        dbService.connect(err => {
            if (err) {
                console.log(err);
                console.log('can\'t connect to MLab')
                return;
            }

            console.log('> Connected to MLab');
            console.log('> Initiating the App');

            let server = app.listen(3000, function () {
                let host = server.address().address;
                let port = server.address().port;

                console.log('> Wallet API Started!', host == '::' ? 'localhost': host, port);
            });
        });
    }
})();
