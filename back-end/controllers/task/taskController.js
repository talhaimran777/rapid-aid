const validateTask = require('../../validation/task')
const validateComment = require('../../validation/comment')

const fs = require('fs')
const path = require('path')
const Task = require('../../models/Task')
const User = require('../../models/User')

// INITIALLY I'M GETING TASKS FORM THE LOCAL JSON FILE
let data = fs.readFileSync(path.resolve(__dirname, '../../data/tasks.json'), 'utf-8')

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ _id: -1 })
    res.status(200).json({ status: 'ok', tasks })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }

  // if (data) {
  //   res.status(200).json({
  //     status: 'OK',
  //     tasks: JSON.parse(data),
  //   })
  // } else {
  //   res.status(500).json({
  //     status: 'Failed',
  //     error: err,
  //   })
  // }
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

  // try {
  //   const tasks = await Task.find().sort({ _id: -1 })
  //   res.status(200).json({ status: 'ok', tasks })
  // } catch (err) {
  //   console.error(err.message)
  //   res.status(500).send('Server Error')
  // }
  // if (data) {
  //   res.status(200).json({
  //     status: 'OK',
  //     tasks: JSON.parse(data),
  //   })
  // } else {
  //   res.status(500).json({
  //     status: 'Failed',
  //     error: err,
  //   })
  // }
}

const postTask = async (req, res) => {
  const { errors, isValid } = validateTask(req.body)
  // validateT

  if (!isValid) {
    return res.status(400).json({ ...errors, validationFormType: 'postTask' })
  }

  const { title, description, budget, address, dueDate, userId } = req.body

  const year = dueDate[0].slice(0, 4)
  const month = dueDate[0].slice(5, 7)
  let day = dueDate[0].slice(8, 10)

  day = parseInt(day, 10) + 1

  const taskDueDate = year + '-' + month + '-' + day

  const today = new Date()
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
  const dateTime = date + ' ' + time
  const postedDate = Date.now()
  try {
    const user = await User.findById(userId).select('-password')
    const task = new Task({
      title: title,
      description: description,
      budget: budget,
      dueDate: taskDueDate,
      address: address,
      status: 'open',
      user: userId,
      name: user.name,
      avatar: user.avatar,
      creationTime: dateTime,
      postedDate,
    })

    const result = await task.save()

    res.status(201).json({ status: 'SUCCESS', task: result })
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

  // console.log(req.body)

  const { user, comment } = req.body
  const { id } = user

  console.log(id)
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

    console.log(newComment)

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
  addComment,
}
