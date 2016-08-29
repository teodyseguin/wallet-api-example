'use strict';

function logger(string) {
    if (process.env.NODE_ENV !== 'test') {
        console.log('logger:' + string);
        return;
    }

    return false;
}

module.exports.logger = logger;
