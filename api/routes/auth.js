const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

// Register
router.post('/register', async(req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(req.body.password),process.env.SECRET_KEY).toString(),
    });
    console.log(newUser);
    try{
        const user = await newUser.save();
        res.status(201).json(user);
        console.log("success");
    }catch(err){
        res.status(500).json(err);
        console.log("fail");    
    }
})

// Login
router.post('/login', async(req,res)=>{
    try{
        const user = await User.findOne({email: req.body.email});
        !user && res.status(401).json("Wrong Credentials");
        const bytes = CryptoJS.AES.decrypt(user.password,process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
        console.log(originalPassword);
        console.log(bytes);

        originalPassword !== req.body.password && res.status(401).json("Wrong Credentials");
        const accessToken = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.SECRET_KEY,{expiresIn: "5d"});
        const {password, ...others} = user._doc;
        res.status(200).json({...others, accessToken});
    }catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;