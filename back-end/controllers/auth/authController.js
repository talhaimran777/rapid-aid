/*eslint comma-dangle: ["error", "always-multiline"]*/

// ** VALIDATORS
const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')

// ** IMPORTANT STUFF
const jwt = require('jsonwebtoken')
const User = require('../../models/User')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')

dotenv.config()

// @route POST api/v1/auth/login
// @desc Login user and return JWT token
// @access Public

const login = (req, res) => {
  console.log(req.body)

  // Form validation
  const { errors, isValid } = validateLoginInput(req.body)

  // Check validation
  if (!isValid) {
    return res.status(400).json({ ...errors, validationFormType: 'login' })
  }

  const email = req.body.email
  const password = req.body.password

  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({
        email: 'Email not found',
        validationFormType: 'login',
      })
    }

    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
          email: user.email,
        }

        // Sign token
        jwt.sign(
          payload,
          process.env.SECRET_KEY,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token,
            })
          }
        )
      } else {
        return res.status(400).json({
          password: 'Password incorrect',
          validationFormType: 'login',
        })
      }
    })
  })
}

module.exports = {
  login,
}
