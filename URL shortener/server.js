const bodyParser = require('body-parser')
const express = require('express')
const URLRoutes = require('./routes/routes')
require('dotenv').config()

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/short-urls',URLRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server Starting At ${process.env.HOST}:${process.env.PORT}`)
})
