const express = require('express');
const router = express.Router();

const {getAllTasks, createTask, updateTaskPUT, updateTaskPATCH, deleteTask, getSingleTask} = require('../controllers/task_C')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getSingleTask).put(updateTaskPUT).delete(deleteTask).patch(updateTaskPATCH)

module.exports = router
