const mongoose = require('mongoose')
// middleware to check for a valid object id
const checkObjectId = (idToCheck) => (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params[idToCheck]))
    return res.status(404).json({
      data: {
        status: 'Failed',
        message: 'Invalid Id',
      },
    })
  next()
}

module.exports = checkObjectId
