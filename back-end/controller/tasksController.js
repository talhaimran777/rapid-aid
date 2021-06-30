const fs = require('fs');
const path = require('path');

// INITIALLY I'M GETING TASKS FORM THE LOCAL JSON FILE
let data = fs.readFileSync(
  path.resolve(__dirname, '../data/tasks.json'),
  'utf-8'
);

const getData = (req, res) => {
  if (data) {
    res.status(200).json({
      status: 'OK',
      tasks: JSON.parse(data),
    });
  } else {
    res.status(500).json({
      status: 'Failed',
      error: err,
    });
  }
};

module.exports = {
  getData,
};
