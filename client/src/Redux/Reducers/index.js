import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import ErrorsReducer from './ErrorsReducer'
import ProductReducer from './ProductReducer'
const rootReducer = combineReducers({AuthReducer,ErrorsReducer,ProductReducer})

export default rootReducer