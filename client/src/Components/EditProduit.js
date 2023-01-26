import { getOneProduct, updateProduct } from "../Redux/Actions/ProductActions"
import Rating from '@mui/material/Rating';
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct=()=>{
const {id} = useParams()
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getOneProduct(id))

},[])


  const OneProduct = useSelector(state=>state.ProductReducer.oneProduct)

  const [name,setName] = useState(OneProduct.name)
  const [price,setPrice] = useState(OneProduct.price)
  const [reference,setReference] = useState(OneProduct.reference)
  const [rate,setRate] = useState(OneProduct.rate)
  const [imageI,setImageI] = useState(OneProduct.imageI)
  const [description,setDescription] = useState(OneProduct.description)

useEffect(()=>{
  setName(OneProduct.name)
  setPrice(OneProduct.price)
  setReference(OneProduct.reference)
  setRate(OneProduct.rate)
  setImageI(OneProduct.imageI)
  setDescription(OneProduct.description)
},[OneProduct])
   const navigate = useNavigate()
   const handlEdit=(a)=>{
    a.preventDefault()
    dispatch(updateProduct({name,price,reference,rate,imageI,description},id,navigate))

   }

  
  return(
    <div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control value={price} onChange={(e)=>setPrice(e.target.value)} type="number" placeholder="Enter price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Reference</Form.Label>
        <Form.Control value={reference} onChange={(e)=>setReference(e.target.value)} type="number" placeholder="Enter reference" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rate</Form.Label>
        <Rating
        name="simple-controlled"
        value={rate}
        onChange={(e)=>setRate(e.target.value)}
      />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control value={imageI} onChange={(e)=>setImageI(e.target.value)} type="text" placeholder="Enter image" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control value={description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter description" />
      </Form.Group>


      
      <Button onClick={(e)=>handlEdit(e)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default EditProduct