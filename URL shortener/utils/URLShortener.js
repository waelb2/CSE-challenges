const shortId = require('shortid')
module.exports = class URLShortener{ 
    constructor(){
        this.URLs = {}
    }
    createShortURL(originalURL){
       const shortURL = `/short-urls/${shortId.generate()}`
       this.URLs[shortURL] = originalURL 
       return shortURL
    }
    findShortURL(originalURL){
        for(let key in this.URLs){
            if(this.URLs[key] === originalURL){
                return key
            }
        }
        return null 

    }
    findOriginalURL(shortURL){
        console.log(this.URLs[shortURL])
        return this.URLs[shortURL] | null 
    }
}