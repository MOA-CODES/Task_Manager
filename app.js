require('./db/connect')
const express = require('express');
const app = express();

const tasks = require('./routes/tasks_R')

// middleware
app.use(express.json())

//routes
app.get('/hello', (req, res)=>{
    res.send('task manager app')
})

app.use('/api/v1/tasks', tasks)

const port = 3000

app.listen(port,(req, res)=>{
    console.log(`listening on port ${port}`)
});