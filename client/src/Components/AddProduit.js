import { useState } from "react";
import {Modal,Button,Form} from 'react-bootstrap'
import Rating from '@mui/material/Rating';
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addProduct } from "../Redux/Actions/ProductActions";

export const AddProduit=({setProduit,Produits})=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [imageP,setImageP] = useState('')
    const [rate,setRate] = useState(0)
    const [description,setDescription] = useState ('')
    const [reference,setReference] = useState('')
   
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleAdd=(a)=>{
        a.preventDefault()
        const ProductData = new FormData();
        ProductData.append('name', name)
        ProductData.append('price', price)
        ProductData.append('imageP', imageP)
        ProductData.append('rate', rate)
        ProductData.append('description', description)
        ProductData.append('reference', reference)

        dispatch(addProduct(ProductData, navigate))   
    }
    
    return(
        <>
         <Form className="form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
              <h1>WELCOME</h1>
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter name" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control onChange={(e)=> setPrice(e.target.value)} type="number" placeholder="Enter price" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Reference</Form.Label>
        <Form.Control onChange={(e)=> setReference(e.target.value)} type="text" placeholder="Enter reference" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Enter description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control accept='image/*' onChange={(e) => setImageP(e.target.files[0])} type="file" placeholder="Enter image link" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rating</Form.Label>
        <br/>
        <Rating
        name="simple-controlled"        
        onChange={(e)=> setRate(e.target.value)}
         />
      </Form.Group>
      <Button onClick={(e)=>handleAdd(e)}>Get Started</Button>
      
    </Form>

      </>
    )
}
