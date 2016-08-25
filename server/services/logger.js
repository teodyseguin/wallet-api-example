'use strict';

function logger(string) {
    if (process.env.NODE_ENV !== 'test') {
        console.log('logger:' + string);
    }
}

module.exports.logger = logger;
