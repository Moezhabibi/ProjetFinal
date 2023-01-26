import {Link} from 'react-router-dom'
import {Button, Card} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../Redux/Actions/AuthActions'
const CardUser=({el})=>{
  const dispatch = useDispatch()
    
    return(
      <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Img variant="top" src={el.imageU} />
        <Card.Title>{el.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{el.age}</Card.Subtitle>
        <Card.Text>
          {el.mail}
        </Card.Text>
        <Card.Link as={Link} to={`/editUser/${el._id}`}>Edit</Card.Link>
        <Button onClick={()=>{dispatch(deleteUser(el._id))}}>Delete</Button>
      </Card.Body>
    </Card>
    )
}

export default CardUser