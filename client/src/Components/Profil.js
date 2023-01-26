import { useEffect } from "react"
import { Card,Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { current, deleteProfil } from "../Redux/Actions/AuthActions"


const Profil =()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(current())
    },[])

    const user = useSelector(state=>state.AuthReducer.user)
    const navigate = useNavigate()

    return(
        <div>
            {
                user &&
                <>
<h1>{user.name}</h1>
<Card.Link as={Link} to={`/editProfil/${user._id}`}>Edit</Card.Link>
        <Button onClick={()=>{dispatch(deleteProfil(user._id,navigate))}}>Delete</Button>
                </>
                
            }
            
        </div>
    )
}

export default Profil