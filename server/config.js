/**
 * The purpose of this configuration script is to contain
 * information that are essential to make our app running
 * Other than the database information, we add more
 * properties in here when necessary. Each of this details
 * are per 'environment'. As you can see, we have 3 environments
 * here:
 *
 * dev => development environment
 * test => test environment
 * prod => production environment
 */
module.exports = {
  "dev": {
    "mongodb": {
      "host": "ds013486.mlab.com",
      "port": 13486,
      "dbname": "wallet",
      "username": "admin",
      "password": "tifme"
    },
    "paypal_sdk": {
      "port" : 5000,
      "api" : {
        "host" : "api.sandbox.paypal.com",
        "port" : "",
        "client_id" : "",
        "client_secret" : ""
      },
      "return_url": "http://localhost:3000/execute",
      "cancel_url": "http://localhost:3000/cancel"
    }
  },
  "test": {
    "mongodb": {
      "host": "ds013486.mlab.com",
      "port": 13486,
      "dbname": "wallet",
      "username": "admin",
      "password": "tifme"
    },
    "paypal_sdk": {
      "port" : 5000,
      "api" : {
        "host" : "api.sandbox.paypal.com",
        "port" : "",
        "client_id" : "",
        "client_secret" : ""
      },
      "return_url": "http://localhost:3000/execute",
      "cancel_url": "http://localhost:3000/cancel"
    }
  },
  "prod": {
    "mongodb": {
      "host": "ds013486.mlab.com",
      "port": 13486,
      "dbname": "wallet",
      "username": "admin",
      "password": "tifme"
    },
    "paypal_sdk": {
      "port" : 5000,
      "api" : {
        "host" : "api.sandbox.paypal.com",
        "port" : "",
        "client_id" : "",
        "client_secret" : ""
      },
      "return_url": "http://localhost:3000/execute",
      "cancel_url": "http://localhost:3000/cancel"
    }
  }
};

