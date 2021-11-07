const express = require('express')
const { createOrder, getOrder } = require('../../../controllers/order/orderController')
const auth = require('../../../middlewares/auth')
const checkObjectId = require('../../../middlewares/checkObjectId')
const { body, check } = require('express-validator')
const router = express.Router()

router.route('/').post([auth], createOrder).get([auth], getOrder)

module.exports = router
