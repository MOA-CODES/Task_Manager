

class CustomAPIError extends Error{


    constructor(message, statusCode){
        super(message);//BECAUSE WERE EXTENDING (SETTING UP A CHILD CLASS) WE need to call this, which invokes constructor of a parent class
        this.statusCode = statusCode
    }
}

const createCustomError = (msg, statusCode)=>{
    return new CustomAPIError(msg, statusCode)
}

module.exports = {  createCustomError,CustomAPIError}