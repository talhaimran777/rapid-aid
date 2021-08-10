const fs = require('fs')
const path = require('path')

// INITIALLY I'M GETING TASKS FORM THE LOCAL JSON FILE
let data = fs.readFileSync(
  path.resolve(__dirname, '../data/tasks.json'),
  'utf-8'
)

const getData = (req, res) => {
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

const postData = (req, res) => {
  res.status(200).json({ ...req.body })
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
}

module.exports = {
  getData,
  postData,
}
