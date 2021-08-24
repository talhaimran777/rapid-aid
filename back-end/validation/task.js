const Validator = require('validator')
const isEmpty = require('is-empty')

module.exports = function validateTask(data) {
  let errors = {}

  // Convert empty fields to an empty string so we can use validator functions
  data.title = !isEmpty(data.title) ? data.title : ''
  data.description = !isEmpty(data.description) ? data.description : ''
  data.address = !isEmpty(data.address) ? data.address : ''

  // Checks
  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required'
  } else if (Validator.isEmpty(data.description)) {
    errors.description = 'Description field is required'
  } else if (Validator.isEmpty(data.address)) {
    errors.address = 'Address field is required'
  }

  // Password checks
  //   if (Validator.isEmpty(data.password)) {
  //     errors.password = 'Password field is required'
  //   }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
