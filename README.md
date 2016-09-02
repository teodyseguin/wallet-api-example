# Wallet API
Welcome here!

## Architecture
The development stack of this simple project are managed by the following
- `mLab`: This is a sandbox mongo database, registered under my name at [mLab.com](http://mLab.com). The database
  has 2 collections:
  > -- `users`: Use to contain user information
  > -- `credits`: Use to contain the user balance information
- `Paypal Sandbox`: This payment gateway is used to simulate transaction for loading up your wallet. For the mean time, this is the only payment option that can use.
  > -- `Sandbox User`: The sandbox user email is sandboxuser-buyer@gmail.com. Use this account for checking out a load balance.
  
## Taiga Kanban Board
I have made a kanban board to keep track of every task I have done to this project.
https://tree.taiga.io/project/teodycs-wallet-api/

In the near future, if this project becomes useful to anybody, I would like leverage the usage of this board, for
further development and feature request.
