const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://MOA2:simplePSW@cluster0.3pru0gs.mongodb.net/?retryWrites=true&w=majority'

//mongodb+srv://MOA:<password>@cluster0.3pru0gs.mongodb.net/?retryWrites=true&w=majority

mongoose.connect(connectionString)
        .then(()=>console.log('Connected to MongoDB..'))
        .catch((err) => console.log(err))

