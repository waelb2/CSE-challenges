const bodyParser = require('body-parser')
const express = require('express')
require('dotenv').config()

const app = express()
const authRoutes = require('./routes/authRoutes')


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/auth',authRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server Starting At ${process.env.HOST}:${process.env.PORT}`)
})
