'use strict';

const express = require('express');

let app = express();

app.use('/v1/wallet/api', function() {});

app.use('/v1/wallet/api/users', function() {});

app.use('/v1/wallet/api/users', function() {});

app.use('/v1/wallet/api/users/<id>', function() {});

app.use('/v1/wallet/api/users/<id>/debit/<amount>', function() {});

app.use('/v1/wallet/api/users/<id>/credit/<amount>', function() {});

app.use('/v1/wallet/api/users/<id>/balance', function() {});

let server = app.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log('wallet api started!', host, port);
});
