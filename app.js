const express = require('express');
const app = express();
const tasks = require('./routes/tasks_R')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
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

const port = process.env.PORT

connectDB();

app.listen(port,(req, res)=>{
    console.log(`listening on port ${port}`)
});