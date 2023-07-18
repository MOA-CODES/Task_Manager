const {CustomAPIError} = require('../errors/custom-errors')
 
const errorHmiddleware = (err,req,res,next) => {

    if(err instanceof CustomAPIError) {
        //if(5 === 5){
        console.log('im here')
        return res.status(err.statusCode).json({msg: err.message})
    }
    console.log('im here2')
    console.log(err)
   // return res.status(500).json({msg : err})
    return res.status(500).json({msg:err.name, msg2:err.message})
    //return res.status(500).json({msg:'why'})
}

module.exports = errorHmiddleware