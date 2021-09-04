const express = require('express')
const { body, check } = require('express-validator')
const { getTasks, getTask, postTask, addComment } = require('../../../controllers/task/taskController')
// const validateTask = require('../../../validation/task')
const auth = require('../../../middlewares/auth')
const checkObjectId = require('../../../middlewares/checkObjectId')
// const { login, register } = require('../../../controllers/auth/authController')
const router = express.Router()

// const { register, login } = require('../../controller/usersController');
// import {
//   getProducts,
//   getProductById,
//   deleteProduct,
//   createProduct,
//   updateProduct,
//   createProductReview,
//   getTopProducts,
// } from '../controllers/productController.js'
// import { protect, admin } from '../middleware/authMiddleware.js'

// router.route('/register').post((req, res) => {
//   res.send('hello');
// });

router
  .route('/')
  .get(auth, getTasks)
  .post(
    [
      auth,
      body('title').isLength({ min: 10, max: 30 }).withMessage('Title must be between 10 and 30 characters'),
      body('description')
        .isLength({ min: 50, max: 300 })
        .withMessage('Description must be between 50 to 300 characters'),
      body('address').isLength({ min: 10, max: 100 }).withMessage('Address must be between 10 to 100 characters'),
      body('budget').isNumeric().withMessage('Budget must be a number'),
    ],
    postTask
  )
router.route('/:id').get([auth, checkObjectId('id')], getTask)
router.route('/comment/:id').post([auth, checkObjectId('id')], addComment)
// router.route('/register').post(register);
// router.route('/login').post(login)
// router.route('/register').post(register)

// router.route('/:id/reviews').post(protect, createProductReview);
// router.get('/top', getTopProducts);
// router
//   .route('/:id')
//   .get(getProductById)
//   .delete(protect, admin, deleteProduct)
//   .put(protect, admin, updateProduct);

module.exports = router
