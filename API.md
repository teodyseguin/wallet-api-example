## Exposed API's

#### API endpoint for creating a user

HTTP METHOD POST

`/v1/wallet/api/users`

Acceptable payload

```
{
    "email": "someemail@email.com",
    "name": "Someone's name",
    "password": "someonespassword"
}
```

#### API endpoint for authenticating a user

HTTP METHOD POST 

`/v1/wallet/api/auth`

Acceptable payload

```
{
    "email": "someemail@email.com",
    "password": "someonespassword"
}
```

#### API endpoint for crediting a user balance

HTTP METHOD POST 

`/v1/wallet/api/credits`

**Caveat**

Needs to be authenticated first before this endpoint can be executed

Acceptable payload

```
intent: 'sale',
payer: {
    payment_method: 'paypal'
},
redirect_urls: {
    return_url: 'http://localhost:3000/execute',
    cancel_url: 'http://localhost:3000/cancel'
},
transactions: [{
    amount: {
        total: 0,
        currency: 'USD'
    },
    description: 'Paypal payment'
}]
```

#### API endpoint for retrieving a user balance

HTTP METHOD GET `/v1/wallet/api/credits`

Caveat

Needs to be authenticated first before this endpoint can be executed

#### API endpoint for debetting a user balance

HTTP METHOD POST `/v1/wallet/api/debits`

Acceptable payload

```
{
  amount: 0
}
```

Caveat

Needs to be authenticated first before this endpoint can be executed

## Useful tool for simulation
Get [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) Chrome App and install it. Use this app so simulate each of these API endpoints.

