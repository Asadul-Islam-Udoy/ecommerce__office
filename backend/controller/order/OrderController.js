const asyncHandler=require('express-async-handler');
const OrderModels = require('../../models/order/OrderModels');
exports.OrderCreateController=asyncHandler(async(req,res)=>{
  const{shippingInfo,itemInfo,orderInfo,shippingPrice,taxPrice,totalPrice} = req.body;  
  const order = await OrderModels.create({
    shippingInfo,
    itemInfo,
    orderInfo,
    shippingPrice,
    taxPrice,
    taxPrice,
    totalPrice,
    paidAt:Date.now()
  })
  if(order){
    return res.status(200).json({
        success:true,
        message:'order create successfully'
    })
  }
  else{
    return res.status(400).json({
        success:false,
        message:'somthing is wrong'
    })
  }
})