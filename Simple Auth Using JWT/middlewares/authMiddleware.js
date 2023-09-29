const jwt = require('jsonwebtoken')
const authMiddleware = (req, res, next)=>{
    const token = req.cookies['auth-token']
    if(!token){
        return res.status(401).json({
            msg:"Unauthorized",
            status:401
        })
    }

    //verifying the token
    jwt.verify(token, process.env.JWT_KEY,(err, payload)=>{
        if(err){
            return res.status(401).json({
                msg:"Session Expired",
                status:401
            })
        }
        req.user = payload
        next()
    })
}

module.exports = authMiddleware