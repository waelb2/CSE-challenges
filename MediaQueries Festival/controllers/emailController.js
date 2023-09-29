const transporter = require('../utils/emailTransporter')
module.exports = async(req, res)=>{
    const {sender, message} = req.body

    const mailOptions = {
        from:process.env.EMAIL_AUTH_USER,
        to:'user@email.com',
        subject:'CSE_Challenges',
        html:`<span style="font-weight:bold">from:</span> ${sender}<br><span style="font-weight:bold">message</span> ${message}`

    }
    try{ 
       await  transporter.sendMail(mailOptions)
        res.status(200).json({
            msg:"message sent successfully",
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