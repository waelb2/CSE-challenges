const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
    res.json({
        msg:"all items "
    })
}).get('/:itemId',(req,res)=>{
    res.json({
        msg: `item ${req.params.itemId}`
    })
}).post('/',(req,res)=>{
    const {newItem} = req.body 
    res.json({
        msg : `New item created : ${newItem}`
    })
}).patch('/:itemId',(req,res)=>{
    const {updatedItem} = req.body
    res.json({
        msg:`Item ${req.params.itemId} updated successfully`
    })
}).delete('/:itemId',(req,res)=>{
    res.json({
        msg:`Item ${req.params.itemId} deleted successfully`
    })
})
module.exports = router 