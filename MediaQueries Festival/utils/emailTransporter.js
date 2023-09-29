const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
    host:'smtp.gmail.com',
    auth:{
        user:process.env.EMAIL_AUTH_USER,
        pass:process.env.EMAIL_AUTH_PASSWORD
    }
})