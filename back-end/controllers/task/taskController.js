// const validateTask = require('../validation/task')

const fs = require('fs')
const path = require('path')

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
  //   postData,
}
