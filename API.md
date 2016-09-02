## Exposed API's

### API endpoint for creating a user

HTTP METHOD POST

`/v1/wallet/api/users`

**Acceptable payload**

```
{
    "email": "someemail@email.com",
    "name": "Someone's name",
    "password": "someonespassword"
}
```

**Response**

```
{
  "message": "User authenticated"
}
```

### API endpoint for authenticating a user

HTTP METHOD POST 

`/v1/wallet/api/auth`

**Acceptable payload**

```
{
    "email": "someemail@email.com",
    "password": "someonespassword"
}
```

### API endpoint for crediting a user balance

HTTP METHOD POST 

`/v1/wallet/api/credits`

**Caveat**

Needs to be authenticated first before this endpoint can be executed

**Acceptable payload**

```
{
    amount: 10,
    currency: "USD",
    payment_method: "paypal"
}
```

**Response**

```
{
  "redirect": "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=<token>"
}
```

The response is a redirect url to paypal payment. This is used to confirm payment to paypal.

### API endpoint for retrieving a user balance

HTTP METHOD GET `/v1/wallet/api/credits`

**Caveat**

Needs to be authenticated first before this endpoint can be executed

**Response**

```
{
  "balance": <amount>,
  "currency": "USD"
}
```

### API endpoint for debetting a user balance

HTTP METHOD POST `/v1/wallet/api/debits`

**Acceptable payload**

```
{
    "amount": <amount>,
    "currency": "USD"
}
```

**Caveat**

Needs to be authenticated first before this endpoint can be executed

## Useful tool for simulation
Get [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) Chrome App and install it. Use this app so simulate each of these API endpoints.

