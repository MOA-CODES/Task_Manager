const express = require('express');
const router = express.Router();

const {getAllTasks, createTask, updateTask, deleteTask, getSingleTask} = require('../controllers/task_C')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getSingleTask).put(updateTask).delete(deleteTask).patch(updateTask)

module.exports = router
