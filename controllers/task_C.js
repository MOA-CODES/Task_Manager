const Task = require('../models/tasks_M')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-errors')


const getAllTasks = asyncWrapper( async (req, res, next)=>{
        const tasks = await Task.find({})
        res.status(200).json({status:"success",tasks, amount:tasks.length})
})

const createTask = asyncWrapper( async (req,res, next)=>{
        const task = await Task.create(req.body)
        res.status(201).json({task})
})

const getSingleTask = asyncWrapper(async (req,res, next)=>{
        //id = req.params.id
        const { id: taskID} = req.params
        const task = await Task.findOne({_id : taskID})
        if(!task){
           // return res.status(404).json({msg: `No task with id: ${id}`})
           return next(createCustomError(`No task with id: ${taskID}`,404))
        }
        res.status(200).json({task})
})

const deleteTask = asyncWrapper( async (req,res, next)=>{
    id = req.params.id
        const task = await Task.findOneAndDelete({_id : id})
        if(!task){
            return next(createCustomError(`No task with id ${id}`,404))
        }
        res.status(200).json({msg:`Task with id ${id} deleted`, task })
})

const updateTaskPUT = asyncWrapper( async (req,res, next)=>{
    id = req.params.id
        // const query = await Task.updateOne({name:Name},{completed:Completed})
        const task = await Task.findOneAndUpdate({_id:req.params.id},req.body,{new:true, runValidators:true, overwrite: true})
        if(!task){
            return next(createCustomError(`No task with id ${id}`,404))
        }
        // res.status(200).json({msg:`Task with id ${id} updated`})
        res.status(200).json({ task })
})

const updateTaskPATCH = asyncWrapper( async (req,res, next)=>{
    id = req.params.id
        const task = await Task.findOneAndUpdate({_id:req.params.id},req.body,{new:true, runValidators:true})
        if(!task){
            return next(createCustomError(`No task with id ${id}`,404))
        }
        res.status(200).json({ task })
})

module.exports = {getAllTasks, createTask, updateTaskPUT, updateTaskPATCH, deleteTask, getSingleTask}