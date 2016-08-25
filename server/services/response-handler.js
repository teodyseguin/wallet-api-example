'use strict';

function printResponse(error, response, docs) {
    if (error) {
        response.write(JSON.stringify(error));
        response.end();
        return console.log(error);
    }
    else {
        try {
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(JSON.stringify(docs));
            response.end();
        }
        catch(err) {
            console.log('Response Header is only written once...');
            response.end();
        }
    }
}

module.exports = {
  printResponse
};