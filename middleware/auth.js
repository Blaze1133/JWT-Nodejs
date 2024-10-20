const {UnAuthorizedError} = require("../errors/index");
const jwt = require('jsonwebtoken'); // requiring the json web token package

const authMiddleware = async(req,res,next) =>{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnAuthorizedError('No Token Provided')
    }
    const token = authHeader.split(' ')[1]; // getting the token
    console.log(token);
    

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET) //validating the token
        req.user = decode; // assigning the token property of req to token so that it can be accesses in the next middleware
        next(); // passing the control to the next middleware
    } catch (error) {
        throw new UnAuthorizedError('Not Authorized to access this resource');
    }
    
    
}

module.exports = {authMiddleware}

// here we are baiscally implmentin the authentication middleware, so that it can be reused along with other middlewares