# Wallet API
Welcome here!

## Architecture
The development stack of this simple project are managed by the following
* `mLab`: This is a sandbox mongo database, registered under my name at [mLab.com](http://mLab.com). The database
  has 2 collections:
  * `users`: Use to contain user information
  * `credits`: Use to contain the user balance information
* `Paypal Sandbox`: This payment gateway is used to simulate transaction for loading up your wallet. For the mean time, this is the only payment option that can use.
  * `Sandbox User`: The sandbox user email is sandboxuser-buyer@gmail.com/buhkahmam99. Use this account for checking out a load balance.
* `NodeJS`: Is the programming language used to write this project.

## Setup

### Prerequisite
This assumes that you arleady have a working environment which has a
* [NodeJS](https://nodejs.org) installed
* [NPM](https://www.npmjs.com) installed
* and of course [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to clone this project

### Running the project
* Clone this project. Once it's done, change directory to the project root folder and run `npm install` do download all the project dependencies
* Next is to issue the command `npm start`. This will serve our project page in `http://localhost:3000`. It should be self explanatory enough to use the presented UI and play around with the Wallet API :)

### Runnin the project tests
* Make sure that you are on the project root directory and just issue the command `npm test` to run our test files. I have used [Mocha](http://mochajs.org/) as the unit testing framework for this project.

## API's
* Please refer to the API.md

## Future Implementation
* Additional payment option other than the Paypal, most probably Credit Card option
* Virtualization via [Docker](https://www.docker.com)
  
## Taiga Kanban Board
I have made a kanban board to keep track of every task I have done to this project.
https://tree.taiga.io/project/teodycs-wallet-api/

In the near future, if this project becomes useful to anybody, I would like leverage the usage of this board, for
further development and feature request.
