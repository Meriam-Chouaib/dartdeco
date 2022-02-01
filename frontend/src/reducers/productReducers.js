import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL,PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS } from "../constants/productConstants"

export const productListReducer = (state= { products: [] }, action) =>{ //dispatch(envoi) the action to the reducer

    switch(action.type){

        case PRODUCT_LIST_REQUEST:

            return { loading: true, products: []} 
            //when we make request so its currently loading
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, //because we have finished downloading
                products: action.payload}
        case PRODUCT_LIST_FAIL:
            return { loading: false,
                error: action.payload}
        default:
            return state
        }
}

export const productDetailsReducer = (
    state= { product: { reviews: [] } }, action) =>{ //dispatch(envoi) the action to the reducer

    switch(action.type){

        case PRODUCT_DETAILS_REQUEST:

            return { loading: true, ... state}  //...state whatever in the state display it
            //when we make request so its currently loading
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, //because we have finished downloading
                product: action.payload}
        case PRODUCT_DETAILS_FAIL:
            return { loading: false,
                error: action.payload}
        default:
            return state
        }
}