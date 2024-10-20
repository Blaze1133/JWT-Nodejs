const {BadRequestError} = require('../errors/index');

const jwt = require('jsonwebtoken') // package to create jwt token
const login = async(req,res) =>{ // in the login we are only concerned about creating the token
    const {username,password} = req.body;
    console.log(username,password);
    if(!username || !password){
        throw new BadRequestError('Please provide usernmame and password') // Using the custom error handler
    }

    const id = new Date().getDate();

    //creating the jwt token -> structure is payload,secretKey and optional parameters
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn: '30d'})
    
    res.status(200).json({msg:"user created",token})
}

const dashboard = async(req,res) =>{ // get request

    const user = req.user // getting the user from the middleware, so that we can send dynamic response
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({ msg : `Hello Mr ${user.username}`,secret: `Here is you acess to autorized data, your lucky number is ${luckyNumber} `})
    
}

module.exports = {login,dashboard};