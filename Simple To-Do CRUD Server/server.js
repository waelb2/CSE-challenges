const bodyParser = require('body-parser')
const express = require('express')
require('dotenv').config()

const app = express()
const appRoutes = require('./routes/routes')

app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())


app.use('/todos',appRoutes)


app.listen(process.env.PORT, () => {
    console.log(`Server Starting At ${process.env.HOST}:${process.env.PORT}`)
})
