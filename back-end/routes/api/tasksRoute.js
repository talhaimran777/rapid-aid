const express = require('express')
const router = express.Router()

// AUTH MIDDLEWAER
const auth = require('../../middlewares/auth')

// TASKS CONTROLLERS
const { getData, postData } = require('../../controller/tasksController')
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

router.route('/tasks').get(auth, getData).post(auth, postData)
// router.route('/tasks').get(auth, getData);

// router.route('/:id/reviews').post(protect, createProductReview);
// router.get('/top', getTopProducts);
// router
//   .route('/:id')
//   .get(getProductById)
//   .delete(protect, admin, deleteProduct)
//   .put(protect, admin, updateProduct);

module.exports = router
