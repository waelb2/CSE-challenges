module.exports = async (req, res)=>{
    res.status(200).json({
        msg:"Protected Route",
        status:200
    })
}