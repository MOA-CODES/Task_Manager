const Task = require('../models/tasks_M')
const asyncWrapper = require('../middleware/async')

const getAllTasks = asyncWrapper( async (req, res)=>{
        const tasks = await Task.find({})
        res.status(200).json({status:"success",tasks, amount:tasks.length})
})

const createTask = asyncWrapper( async (req,res)=>{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    
})

const getSingleTask = asyncWrapper(async (req,res)=>{
         id = req.params.id
        const task = await Task.findOne({_id : id})
        if(!task){
            return res.status(404).json({msg:`No task with id ${id}`})
        }
        res.status(200).json({task})
})

const deleteTask = asyncWrapper( async (req,res)=>{
    id = req.params.id
        const task = await Task.findOneAndDelete({_id : id})
        if(!task){
            return res.status(404).json({msg:`No task with id ${id}`})
        }
        res.status(200).json({msg:`Task with id ${id} deleted`, task })
})

const updateTaskPUT = asyncWrapper( async (req,res)=>{
    id = req.params.id
        // const query = await Task.updateOne({name:Name},{completed:Completed})
        const task = await Task.findOneAndUpdate({_id:req.params.id},req.body,{new:true, runValidators:true, overwrite: true})
        if(!task){
            return res.status(404).json({msg:`No task with id ${id}`})
        }
        // res.status(200).json({msg:`Task with id ${id} updated`})
        res.status(200).json({ task })
})

const updateTaskPATCH = asyncWrapper( async (req,res)=>{
    id = req.params.id
        const task = await Task.findOneAndUpdate({_id:req.params.id},req.body,{new:true, runValidators:true})
        if(!task){
            return res.status(404).json({msg:`No task with id ${id}`})
        }
        res.status(200).json({ task })
})

module.exports = {getAllTasks, createTask, updateTaskPUT, updateTaskPATCH, deleteTask, getSingleTask}