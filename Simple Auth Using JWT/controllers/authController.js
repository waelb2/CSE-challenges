const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

//storing users data
var users = {}

const signUp = async (req,res)=>{
    const {email, password} = req.body

    //checking if the user exists 
    if(users[email]){
        res.status(400).json({
            msg:"Email already exists",
            status:400
        })
        return
    }
    try {
        //hashing the password 
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        
        //signing the new user        
        users[email] = hashedPassword 
    
        res.status(200).json({
        msg:"Signup successful",
        status:200
    })

    }
    catch(err){
        console.log(err)
        res.status(500).json({
            msg:"Internal Server Error",
            status:500
        })
    }
}
const login = async (req,res)=>{
    const {email, password} = req.body

    //checking if the data is valid 
    if(!users[email]) {
        res.status(401).json({
            msg:"Email does not exist",
            status:401
        })
    return 
    }
    if(! await bcrypt.compare(password, users[email])){
        res.status(401).json({
            msg:"Incorrect password",
            status:401
        })
        return 
    }

    
    try {
        //creating jwt token 
        const token = await jwt.sign({email}, process.env.JWT_KEY,{
           expiresIn:'24h',
           issuer:'CSE-CHALLENGE',
           subject:"Authentication"
        })
        //storing the auth-token in a cookie
        res.cookie('auth-token', token,{
            httpOnly:true,
            secure:true
        })
        res.status(200).json({
            msg:"login successful",
            status:200
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            msg:"Internal Server Error",
            status:500
        })
    }
}
const logout = async (req,res)=>{
    res.clearCookie('auth-token') 
    res.status(200).json({
        msg:'logging out',
        status:200
    })
}

module.exports = {login, signUp, logout}