const validateTask = require('../../validation/task')

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
    })

    const result = await task.save()

    res.status(201).json({ status: 'SUCCESS', task: result })
  } catch (err) {
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
  postTask,
}
