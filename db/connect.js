const mongoose = require('mongoose');

const connectDB = async() =>{
    try{
      await mongoose.connect(process.env.MONGO_URI).then(()=>console.log('Connected to MongoDB..'))
    }
    catch(err){
        console.log(err).then(()=>process.exit(1))
    }
}

module.exports = connectDB;

// mongoose.connect(connectionString)
//         .then(()=>console.log('Connected to MongoDB..'))
//         .catch((err) => console.log(err))
