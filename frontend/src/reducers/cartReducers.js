import React from 'react';
import { CART_ADD_ITEM } from '../constants/cartConstants'; 


export const cartReducer = (state = { cartItems: []}, action) => {

 switch(action.type) {
     
     case CART_ADD_ITEM:
         const item = action.payload;

         //the problem here: 
         const existItem = state.cartItems.find(x => x.product === item.product)

         if(existItem) {
            return {
                ...state, 
                cartItems: state.cartItems.map(x =>
                  x.product === existItem.product // if the id of the current item in the tableau == id of the item eli dkhalna bih then affichi item else affichili x
                    ? item : x
                    ),
            }
         }else{
             return{
                 ...state,
                 cartItems: [...state.cartItems, item] //return the current items and add the new item 
             }
         }
    
         default:
         return state
 }
};


