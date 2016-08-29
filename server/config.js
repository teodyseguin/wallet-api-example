/**
 * The purpose of this configuration script is to contain
 * information that are essential to make our app running
 * Other than the detabase information, we add add more
 * properties in here when necessary. Each of this details
 * are per 'environment'. As you can we have 3 environments
 * here:
 *
 * dev => development environment
 * test => test environment
 * prod => production environment
 */
module.exports = {
  "dev": {
    "mongodb": {
      "host": "",
      "port": "",
      "dbname": "",
      "username": "",
      "password": ""
    },
    "paypal_sdk": {
      "port": 0,
      "api": {
        "host": "",
        "port": "",
        "client_id": "",
        "client_secret": ""
      }
    }
  },
  "test": {
    "mongodb": {
      "host": "",
      "port": "",
      "dbname": "",
      "username": "",
      "password": ""
    },
    "paypal_sdk": {
      "port": 0,
      "api": {
        "host": "",
        "port": "",
        "client_id": "",
        "client_secret": ""
      }
    }
  },
  "prod": {
    "mongodb": {
      "host": "",
      "port": "",
      "dbname": "",
      "username": "",
      "password": ""
    },
    "paypal_sdk": {
      "port": 0,
      "api": {
        "host": "",
        "port": "",
        "client_id": "",
        "client_secret": ""
      }
    }
  }
};
