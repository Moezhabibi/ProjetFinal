import { CURRENT, FAIL, REGISTER,LOGIN, LOGOUT, GET_USERS ,DELETE_USER ,GET_PRODUITS , DELETE_PRODUIT, GET_ONE_USER} from "../TypeActions/AuthType"

const initialState = {
    user : {},
    errors : [],
    Users : [],
    OneUser : {},
    Produits : [],
    OneProduits : {}
}

const AuthReducer=(state = initialState ,action)=>{
    switch (action.type) {
        case REGISTER:
        localStorage.setItem('token',action.payload.token)
        return {...state , user : action.payload.newUser, errors : null}
        case LOGIN :
        localStorage.setItem('token',action.payload.token)
        return {...state, user : action.payload.Found, errors : null}
        case LOGOUT :
        localStorage.removeItem('token')
        return {...state,user : null, errors : null}
        case GET_USERS :
        return {...state,Users:action.payload}
        case DELETE_USER :
        return {...state,User:action.payload}
        case GET_ONE_USER : return {...state,OneUser : action.payload}
        // case GET_PRODUITS :
        // return {...state,Produits:action.payload}
        // case DELETE_PRODUIT :
        // return {...state,Produit:action.payload}
        case CURRENT : return {...state,user : action.payload,errors : null}
        case FAIL : return {...state,errors: action.payload , user:null}
        
    
        default: return state
            
    }
}

export default AuthReducer