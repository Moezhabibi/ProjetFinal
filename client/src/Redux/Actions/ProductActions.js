import axios from "axios"
import { GETONEPRODUCT, GETPRODUCTS } from "../TypeActions/ProductTypes"
import {UPDATEPRODUCT} from "../TypeActions/ProductTypes"

export const getProducts=()=>async(dispatch)=>{
    try {
     const res = await axios.get('/api/produit/GetAllProduits')
    dispatch({
        type : GETPRODUCTS,
        payload : res.data.Produits
    })

    }catch(error) {
        console.log(error)
    }
}

export const deleteProduct=(id)=>async(dispatch)=>{
       try{
          await axios.delete(`/api/produit/deleteProduit/${id}`)
          dispatch(getProducts())
        }catch(error){
         console.log(error)
        }
      }

export const addProduct=(newP,navigate)=>async(dispatch)=>{
        try {
            await axios.post('/api/produit/AddProduit',newP)
            dispatch(getProducts())
            navigate('/ListProduits')
        } catch (error) {
            console.log(error)
        }
}

export const getOneProduct=(id)=>async(dispatch)=>{
    try {
        console.log(id)
        const res = await axios.get(`/api/produit/ReadOneProduit/${id}`)
        dispatch(
            {
                type : GETONEPRODUCT, 
                payload : res.data.ProduitF
            }
        )
    } catch (error) {
        console.log(error)
    }
 }

 export const updateProduct=(upPro,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/produit/UpdateProduit/${id}`,upPro)
        dispatch(getProducts())
        navigate('/listProduits')
    } catch (error) {
        console.log(error)
    }
 }

