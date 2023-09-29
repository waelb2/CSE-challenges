const express = require('express')
require('dotenv').config()

const app = express()
const emailRoutes = require('./routes/routes')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/contact-us',emailRoutes)


app.listen(process.env.PORT, () => {
    console.log(`Server Starting At ${process.env.HOST}:${process.env.PORT}`)
})
