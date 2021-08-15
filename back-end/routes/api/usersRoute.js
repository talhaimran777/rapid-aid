const express = require('express')
const router = express.Router()

const { register, login } = require('../../controllers/usersController')
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

router.route('/register').post(register)
router.route('/login').post(login)

// router.route('/:id/reviews').post(protect, createProductReview);
// router.get('/top', getTopProducts);
// router
//   .route('/:id')
//   .get(getProductById)
//   .delete(protect, admin, deleteProduct)
//   .put(protect, admin, updateProduct);

module.exports = router
