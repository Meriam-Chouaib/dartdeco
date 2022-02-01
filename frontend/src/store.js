import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers' 
import {userLoginReducer , userRegisterReducer, userDetailsReducer, userUpdateProfileReducer} from './reducers/userReducers'

const reducer = combineReducers({
    // we put the reducers here in the {}
    productList: productListReducer, 
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,

    
})
 


//if there in something we want to load it when redux start load we put it here

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse
(localStorage.getItem('cartItems')): []

const userInfoFromStorage = localStorage.getItem('userInfo') 
? JSON.parse(localStorage.getItem('userInfo')) //check if the userInfo on the store if it is we set it to the variable
: null

const initialState = {
    cart: { cartItems: cartItemsFromStorage}, //recover(récuperer) the items from localstorage incartActions
    userLogin: {userInfo: userInfoFromStorage},
} 

const middleware = [thunk]

const store = createStore(
    reducer,
     initialState,
      composeWithDevTools(applyMiddleware(...middleware))
       )
    //...middleware meaning whatever he passing here const middleware = [thunk] in the [thunk] he recupere here

export default store