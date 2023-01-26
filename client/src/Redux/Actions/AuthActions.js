import { CURRENT, FAIL, GET_USERS, LOGIN, LOGOUT, REGISTER , GET_PRODUITS , DELETE_PRODUIT, GET_ONE_USER } from "../TypeActions/AuthType"
import axios from "axios"
import { alertError } from "./ErrorAction"


export const register=(user,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('api/auth/signUp',user)
        dispatch({
            type : REGISTER,
            payload : res.data
        })
        navigate ("/profil")


    } catch (error) {
    
        error.response.data.errors.forEach(element => {
    dispatch(alertError(element.msg))
});
    }
}




export const login=(userl,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('api/Auth/signIn',userl)
        dispatch({
            type : LOGIN,
            payload : res.data
        })

        navigate("/profil")
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(alertError(element.msg))
        });
        
    }
}

export const current=()=>async(dispatch)=>{
    const config={
        headers : {
            Authorized : localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get('/api/auth/currentUser',config)
        dispatch({
            type : CURRENT,
            payload : res.data
        })
    } catch (error) {
        dispatch({
            type : FAIL,
            payload : error.response.data
        })  
    }
}

export const Logout=()=>{
    return(
        {
            type : LOGOUT
        }
    )
}

export const getUsers=()=>async(dispatch)=>{
    try {
     const res = await axios.get('/api/auth/ReadAllUsers')
    dispatch({
        type : GET_USERS,
        payload : res.data.Users
    })

    }catch(error) {
        console.log(error)
    }
}

export const deleteUser=(id)=>async(dispatch)=>{
    try{
      await axios.delete(`/api/auth/deleteUser/${id}`)
      dispatch(getUsers())
    }catch(error){
     console.log(error)
    }
 }

 export const deleteProfil=(id,navigate)=>async(dispatch)=>{
    try{
      await axios.delete(`/api/auth/deleteUser/${id}`)
      dispatch(Logout())
      navigate('/')
    }catch(error){
     console.log(error)
    }
 }

 export const getOneUser=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/auth/ReadOneUser/${id}`)
        dispatch(
            {
                type : GET_ONE_USER, 
                payload : res.data.OneUser
            }
        )
    } catch (error) {
        console.log(error)
    }
 }

 export const updateUser=(upUser,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/auth/UpdateUser/${id}`,upUser)
        dispatch(getUsers())
        navigate('/listUser')
    } catch (error) {
        console.log(error)
    }
 }

 export const updateProfile=(upUser,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/auth/UpdateUser/${id}`,upUser)
        dispatch(current())
        navigate('/profil')
    } catch (error) {
        console.log(error)
    }
 }

