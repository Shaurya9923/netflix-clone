const { x64 } = require('crypto-js');
const jwt = require('jsonwebtoken');

function verify(req,res,next){
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(" ")[1];
        console.log(token);
        jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
            if(err) res.status(403).json("Token is not valid!");
            req.user = user;
            console.log("Token is valid!");
            console.log(user);
            next();
        })
    }else{
        return res.status(401).json("You are not authenticated!");
    }
}

module.exports = verify;