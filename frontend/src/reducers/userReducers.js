import {
        USER_LOGIN_REQUEST,
        USER_LOGIN_SUCCESS,
        USER_LOGIN_FAIL,
        USER_LOGOUT, 
        USER_REGISTER_REQUEST,
        USER_REGISTER_SUCCESS,
        USER_REGISTER_FAIL,
        USER_DETAILS_REQUEST,
        USER_DETAILS_SUCCESS, 
        USER_DETAILS_FAIL,
        USER_UPDATE_PROFILE_FAIL,
        USER_UPDATE_PROFILE_REQUEST, 
        USER_UPDATE_PROFILE_SUCCESS,
        USER_UPDATE_PROFILE_RESET,
       } from "../constants/userConstants"

export const userLoginReducer = (state= {}, action) =>{ //dispatch(envoi) the action to the reducer

    switch(action.type){

        case USER_LOGIN_REQUEST:

            return { loading: true} 
            //when we make request so its currently loading
        case USER_LOGIN_SUCCESS:
            return { loading: false, //because we have finished downloading
                userInfo: action.payload}
        case USER_LOGIN_FAIL:
            return { loading: false,
                error: action.payload}
        case USER_LOGOUT:
            return {}
        default:
            return state
        }
}

export const userRegisterReducer = (state= {}, action) =>{ //dispatch(envoi) the action to the reducer

    switch(action.type){

        case USER_REGISTER_REQUEST:

            return { loading: true} 
            //when we make request so its currently loading
        case USER_REGISTER_SUCCESS:
            return { loading: false, //because we have finished downloading
                userInfo: action.payload}
        case USER_REGISTER_FAIL:
            return { loading: false,
                error: action.payload}
      
        default:
            return state
        }
}

export const userDetailsReducer = (state= {user:{}}, action) =>{ //dispatch(envoi) the action to the reducer

    switch(action.type){

        case USER_DETAILS_REQUEST:

            return { ...state, loading: true} 
            //when we make request so its currently loading
        case USER_DETAILS_SUCCESS:
            return { loading: false, //because we have finished downloading
                user: action.payload}
        case USER_DETAILS_FAIL:
            return { loading: false,
                error: action.payload}
      
        default:
            return state
        }
}


export const userUpdateProfileReducer = (state= {}, action) =>{ //dispatch(envoi) the action to the reducer

    switch(action.type){

        case USER_UPDATE_PROFILE_REQUEST:

            return { loading: true} 
            //when we make request so its currently loading
        case USER_UPDATE_PROFILE_SUCCESS:
            return { loading: false, success:true, //because we have finished downloading
                userInfo: action.payload}
        case USER_UPDATE_PROFILE_FAIL:
            return { loading: false,
                error: action.payload}
        case USER_UPDATE_PROFILE_RESET:
            return { }
    
        default:
            return state
        }
}