const express = require('express')
const router = express.Router()
const {requestURL, handleShortURL} = require('../controllers/controllers.js')

router.post('/',requestURL).get('/:randomString',handleShortURL)

module.exports = router
