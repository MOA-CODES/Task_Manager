const mongoose = require('mongoose');



const TaskSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,'must provide a name'], //validations
        trim:true,
        maxlength:[20, 'max length is 20'],
        minlength:[1, "can't be less 2"]

    },
    completed:{
        type:Boolean,
        default:false, 
    }

})

module.exports = mongoose.model('Task', TaskSchema)