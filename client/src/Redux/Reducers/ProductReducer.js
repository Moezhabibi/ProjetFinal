import { GETONEPRODUCT, GETPRODUCTS } from "../TypeActions/ProductTypes"

const initialState={
    produits : [],
    oneProduct : {}
}

const ProductReducer=(state = initialState,action)=>{
    switch (action.type) {
        case GETPRODUCTS : return {...state,produits : action.payload}
        case GETONEPRODUCT : return {...state,oneProduct : action.payload}
        
        default: return state
        
    }
}

export default ProductReducer