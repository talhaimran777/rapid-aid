const validateTask = require('../../validation/task')
const validateComment = require('../../validation/comment')

const { body, check, validationResult } = require('express-validator')
const fs = require('fs')
const path = require('path')
const Task = require('../../models/Task')
const User = require('../../models/User')

// INITIALLY I'M GETING TASKS FORM THE LOCAL JSON FILE
let data = fs.readFileSync(path.resolve(__dirname, '../../data/tasks.json'), 'utf-8')

const getTasks = async (req, res) => {
  const { searchKeyword } = req.query

  if (!searchKeyword) {
    try {
      const tasks = await Task.find().sort({ _id: -1 })
      res.status(200).json({ status: 'ok', tasks })
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  } else {
    try {
      // const tasks = await Task.find({
      //   title: { $regex: searchKeyword, $options: 'i' },
      // }).sort({ _id: -1 })

      const tasks = await Task.find()
        .or([
          { title: { $regex: searchKeyword, $options: 'i' } },
          { description: { $regex: searchKeyword, $options: 'i' } },
          { name: { $regex: searchKeyword, $options: 'i' } },
          { address: { $regex: searchKeyword, $options: 'i' } },
          { status: { $regex: searchKeyword, $options: 'i' } },
        ])
        .sort({ _id: -1 })
      res.status(200).json({ status: 'ok', tasks })
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
}

const getTask = async (req, res) => {
  // console.log(req.params.id)

  try {
    const task = await Task.findById(req.params.id)
    // console.log(task)
    if (!task) {
      return res.status(404).json({ status: 'FAILED', msg: 'Task was not found!' })
    }

    res.status(200).json({ status: 'SUCCESS', task })
  } catch (err) {
    // console.error(err.message)

    res.status(500).send({ status: 'FAILED', msg: 'Server Error' })
  }
}

const postTask = async (req, res) => {
  // const { errors, isValid } = validateTask(req.body)
  // validateT

  // if (!isValid) {
  //   return res.status(400).json({ ...errors, validationFormType: 'postTask' })
  // }

  // Finds the validation errors in this request and wraps them in an object with handy functions

  // check('title', 'Title is required').notEmpty()

  // body('title').isLength({ min: 5, max: 30 }).withMessage('Title must be between 5 and 30 characters')

  const errors = validationResult(req)
  console.log(errors)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { title, description, budget, address, dueDate, userId } = req.body
  const postedDate = Date.now()
  const lastUpdated = Date.now()

  try {
    const user = await User.findById(userId).select('-password')
    const task = new Task({
      title: title,
      description: description,
      budget: budget,
      dueDate,
      address: address,
      status: 'open',
      user: userId,
      name: user.name,
      avatar: user.avatar,
      postedDate,
      lastUpdated,
    })

    const result = await task.save()

    res.status(201).json({ status: 'SUCCESS', task: result })
  } catch (err) {
    res.status(500).json({ status: 'FAILED', error: err, message: 'Server Error' })
  }
}

const updateTask = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { id } = req.params
  const { title, description, budget, address, dueDate, userId } = req.body

  try {
    const task = await Task.findById(id)
    if (!task) {
      return res.status(404).json({ status: 'FAILED', msg: 'Task was not found!' })
    } else {
      const user = await User.findById(userId).select('-password')
      if (user) {
        task.title = title
        task.description = description
        task.budget = budget
        task.dueDate = dueDate
        task.address = address
        task.lastUpdated = Date.now()
        const result = await task.save()
        return res.status(201).json({ status: 'SUCCESS', task: result })
      }
    }
  } catch (err) {
    res.status(500).json({ status: 'FAILED', error: err, message: 'Server Error' })
  }
}

const addComment = async (req, res) => {
  // res.status(201).json({ status: 'SUCCESS', task: result })
  const { errors, isValid } = validateComment(req.body)
  if (!isValid) {
    return res.status(400).json({ ...errors, validationFormType: 'comment' })
  }

  const { user, comment } = req.body
  const { id } = user

  const lastUpdated = Date.now()

  try {
    // console.log(req.params)
    const user = await User.findById(id).select('-password')
    const task = await Task.findById(req.params.id)

    const newComment = {
      comment: comment,
      name: user.name,
      avatar: user.avatar,
      user: user.id,
    }

    task.comments.unshift(newComment)

    await task.save()

    res.status(201).json({ status: 'SUCCESS', comments: task.comments })

    // console.log(req.body)
  } catch (err) {
    console.log('ERROR')
    res.status(500).json({ status: 'FAILED', error: err, message: 'Server Error' })
  }
}

// const postData = (req, res) => {
// Form validation
//   const { errors, isValid } = validateTask(req.body)

//   res.status(200).json({ errors, isValid })

// let { dueDate } = req.body

// const year = dueDate.slice(0, 4)
// const month = dueDate.slice(5, 7)
// const day = dueDate.slice(8, 10)

// dueDate = {
//   day,
//   month,
//   year,
// }
// res.status(200).send(dueDate)
// data = JSON.stringify(task)
// fs.writeFile(
//   path.resolve(__dirname, '../data/tasks.json'),
//   data,
//   'utf-8',
//   (err) => {
//     if (err) {
//       res.status(500).json({
//         status: 'Failed',
//         error: err,
//       })

// if (data) {
//   res.status(200).json({
//     status: 'OK',
//     tasks: JSON.parse(data),
//   });
// } else {
//   res.status(500).json({
//     status: 'Failed',
//     error: err,
//   });
// }
// }

module.exports = {
  getTasks,
  getTask,
  postTask,
  updateTask,
  addComment,
}
