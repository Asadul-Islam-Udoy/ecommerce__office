import axios from "axios"
import {
     ADD_TO_CARD_FAIL,
     ADD_TO_CARD_REQUEST, 
     ADD_TO_CARD_SUCCESS,
     ADD_TO_DELETE_ITEM,
     ADD_TO_SHIPPING_ITEM,
     ORDER_CREATE_REQUEST,
     ORDER_CREATE_SUCCESS,
     ORDER_CREATE_FAIL,
     GET_SECRIT_KEY_REQUEST,
     GET_SECRIT_KEY_SUCCESS,
     GET_SECRIT_KEY_FAIL
     } from "../constances/OrderConstance";


//getting secrit key
export const GetSecritKeyAction=()=>async(dispatch)=>{
    try{
      dispatch({type:GET_SECRIT_KEY_REQUEST})
      const config = {headers:{'Content-Type':'application/json'}}
      const{data} = await axios.get('https://ecommerce-office.onrender.com/api/v1/orders/payment/api_key',config)
      dispatch({type:GET_SECRIT_KEY_SUCCESS,
      payload:data
    })
    }
    catch(error){
        dispatch({type:GET_SECRIT_KEY_FAIL,
        payload:error.response.data.message
        })
    }
    }
export const AddToCardAction=(id,quantity,colors,sizes)=>async(dispatch,getState)=>{
try{
    dispatch({type:ADD_TO_CARD_REQUEST})
    const config = {headers:{'Content-Type':'application-json'}}
    const {data} = await axios.get(`https://ecommerce-office.onrender.com/api/v1/products/single/product/${id}/`);
    dispatch({type:ADD_TO_CARD_SUCCESS,
       payload:{
        product:data.product._id,
        name:data.product.name,
        price:data.product.price,
        productImage:data.product.productImages[0].image,
        stock:data.product.stock,
        quantity,
        colors,
        sizes,
        height:data.product.height,
        width:data.product.width
       }
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().card.cartItems))
}
catch(error){
    dispatch({type:ADD_TO_CARD_FAIL,
    payload:error.response.data.message
    })
}

}


export const ShippingCartItemAction=({name,address,city,state,country,mobile})=>(dispatch,getState)=>{
    dispatch({type:ADD_TO_SHIPPING_ITEM,
     payload:{
        name:name,
        address:address,
        city:city,
        state:state,
        country:country,
        mobile:mobile
     }
    })
    localStorage.setItem('shippingItems',JSON.stringify(getState().card.shippingItems))
}


//order create

export const OrderCreateAction=(fromData)=>async(dispatch)=>{
try{
  dispatch({type:ORDER_CREATE_REQUEST})
  const config = {headers:{'Content-Type':'application/json'}}
  const{data} = await axios.post('https://ecommerce-office.onrender.com/api/v1/orders/create',fromData)
  dispatch({type:ORDER_CREATE_SUCCESS,
  payload:data
})
}
catch(error){
    dispatch({type:ORDER_CREATE_FAIL,
    payload:error.response.data.message
    })
}
}
export const DeleteCartItemAction=(id)=>async(dispatch,getState)=>{
dispatch({type:ADD_TO_DELETE_ITEM,
payload:id
})
localStorage.setItem('cartItems',JSON.stringify(getState().card.cartItems))
}
