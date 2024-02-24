const express = require('express');
const { OrderCreateController } = require('../../controller/order/OrderController');
const { PaymentController, GetApiKEY } = require('../../controller/payment/PaymentController');

const route = express.Router()

route.post('/payment/create',PaymentController)
route.get('/payment/api_key',GetApiKEY)
route.post('/create',OrderCreateController)
module.exports = route