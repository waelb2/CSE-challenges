const validURL = require('../utils/URLValidator')
const URLShortener = require('../utils/URLShortener')
const finder = require('../utils/URLShortener')

//storing urls 
const URLs = new URLShortener()


const requestURL = async (req,res)=>{
    const {originalURL} = req.body

    //checking if the provided url is valid 
    const isValidURL = validURL(originalURL)
    if(!isValidURL){
        res.status(400).json({
            msg:"Invalid URL",
            status:400
        })
        return 
    }
    let shortURL 

    shortURL = URLs.findShortURL(originalURL)
    if(shortURL){
        //URL already exists 
        res.json({
            originalURL,
            shortURL
        })
        return 
    }

    //not found
    shortURL = URLs.createShortURL(originalURL)
    res.json({
        originalURL,
        shortURL 
    })
}

const handleShortURL = async (req,res) =>{
    const shortURL = `/short-urls/${req.params.randomString}`
    console.log(shortURL)
    const originalURL = URLs.findOriginalURL(shortURL)
    console.log(originalURL)
    if(originalURL){ 
        res.redirect(originalURL)
        return
    }
    res.json({
        msg:'not good'
    })
}
module.exports = {requestURL, handleShortURL}