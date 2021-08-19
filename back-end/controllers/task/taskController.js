// const validateTask = require('../validation/task')

const fs = require('fs')
const path = require('path')
const Task = require('../../models/Task')

// INITIALLY I'M GETING TASKS FORM THE LOCAL JSON FILE
let data = fs.readFileSync(path.resolve(__dirname, '../../data/tasks.json'), 'utf-8')

const getTasks = (req, res) => {
  if (data) {
    res.status(200).json({
      status: 'OK',
      tasks: JSON.parse(data),
    })
  } else {
    res.status(500).json({
      status: 'Failed',
      error: err,
    })
  }
}

const postTask = async (req, res) => {
  const { title, description, budget, dueDate } = req.body
  console.log(req.body)
  try {
    const task = new Task({
      // _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      description: req.body.description,
      budget: req.body.budget,
      dueDate: req.body.dueDate,
      status: 'open',
    })

    console.log('result', task)
    const result = await task.save()

    console.log(result)
    res.status(201).json({ status: 'Created', task: result })
  } catch (err) {
    res.status(500).json({ status: 'Failed', error: {} })
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
