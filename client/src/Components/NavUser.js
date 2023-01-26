import {Navbar,Container,Nav} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Logout } from '../Redux/Actions/AuthActions'
const NavUser =()=>{
  const token = localStorage.getItem('token')
  const user = useSelector(state=> state.AuthReducer.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
    return(
        <div>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Imprimerie</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to = "/">Home</Nav.Link>
            {
              token && user.role == 'admin' ?
              <>
              <Nav.Link as={Link} to = "/profil">Profil</Nav.Link>
              <Nav.Link as={Link} to = "/ListProduits">Produits</Nav.Link>
              <Nav.Link as={Link} to = "/addProduit">Add Produit</Nav.Link>
              <Nav.Link as={Link} to = "/listUser">Users</Nav.Link>  
              <Nav.Link onClick={()=>{dispatch(Logout());navigate('/')}}>Logout</Nav.Link>
              </>
              :

              token && user.role == 'client' ?
             <>
              <Nav.Link as={Link} to = "/profil">Profil</Nav.Link>
              <Nav.Link as={Link} to = "/ListProduits">Produits</Nav.Link>              
              <Nav.Link onClick={()=>{dispatch(Logout());navigate('/')}}>Logout</Nav.Link>
            </>
              :

              <>
              <Nav.Link as={Link} to = "/register">Register</Nav.Link>
              <Nav.Link as={Link} to = "/login">Login</Nav.Link>
              </>
             
            }
             
             
             
            
           
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}

export default NavUser