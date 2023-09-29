const bodyParser = require('body-parser')
const express = require('express')
require('dotenv').config()

const app = express()
const authRoutes = require('./routes/authRoutes')
const ProtectedRoute = require('./routes/protectedRoute')
const authMiddleware = require('./middlewares/authMiddleware')
const cookieParser = require('cookie-parser')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/auth',authRoutes)
app.use(cookieParser())
app.use('/protection',authMiddleware,ProtectedRoute)

app.listen(process.env.PORT, () => {
    console.log(`Server Starting At ${process.env.HOST}:${process.env.PORT}`)
})
