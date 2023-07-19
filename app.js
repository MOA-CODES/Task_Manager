const express = require('express');
const app = express();
const tasks = require('./routes/tasks_R')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHmiddleware = require('./middleware/error-handler')

require('dotenv').config()

// middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
// app.get('/hello', (req, res)=>{
//     res.send('task manager app')
// })

app.use('/api/v1/tasks', tasks)

app.use(notFound) //for routes that dont exist
app.use(errorHmiddleware) //for handling all errors

const port = process.env.PORT || 3000

connectDB();

app.listen(port,(req, res)=>{
    console.log(`listening on port ${port}`)
});