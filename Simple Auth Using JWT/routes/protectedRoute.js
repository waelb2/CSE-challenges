const express = require('express')
const router = express.Router()
const protected = require('../controllers/protectedController')

router.get('/',protected)


module.exports = router 