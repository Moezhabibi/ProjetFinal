import { useEffect, useState } from "react"
import { Form, Button} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getOneUser, updateUser } from "../Redux/Actions/AuthActions"


const EditUser=()=>{
const {id} = useParams()
const dispatch = useDispatch()

  const OneUser = useSelector(state=>state.AuthReducer.OneUser)
  const [name,setName] = useState(OneUser.name)
  const [age,setAge] = useState(OneUser.age)
  const [email,setEmail] = useState(OneUser.email)
  const [imageU,setImageU] = useState(OneUser.imageU)
  useEffect(()=>{
    dispatch(getOneUser(id))

},[])
useEffect(()=>{
  setName(OneUser.name)
  setAge(OneUser.age)
  setEmail(OneUser.email)
  setImageU(OneUser.imageU)
},[OneUser])
   const navigate = useNavigate()
   const handlEdit=(a)=>{
    a.preventDefault()
    dispatch(updateUser({name,age,email,imageU},id,navigate))

   }

  
  return(
    <div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control value={age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Enter age" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control value={imageU} onChange={(e)=>setImageU(e.target.value)} type="text" placeholder="Enter image" />
      </Form.Group>
      
      <Button onClick={(e)=>handlEdit(e)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default EditUser