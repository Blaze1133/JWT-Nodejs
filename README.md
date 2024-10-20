### JWT BASICS

1. Here in this project we will be learning about implementing jwt.
2. JWT is used to transmit information between two devices securely
3. To make sure that only authorized users can access the protected routes

## Packages needed to install for this project

1. jsonwebtoken
2. http-status-codes


### STEPS

1. First, To access the dashboard, one must be authenticated
2. So, whenever a user logs in a token is created
3. This token is passed from the server to the client and stored on the local storage
4. Whenever the client needs to access the dashboard, it retrieves the token from local storage and verifies it using jwt.verify.
5. Creation of token is done using jwt.sign(header,payload,signature)
