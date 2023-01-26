import { Card,Button } from "react-bootstrap"
import Rating from '@mui/material/Rating';
import { deleteProduct } from "../Redux/Actions/ProductActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const CardProduit=({el})=>{
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    const user = useSelector(state=>state.AuthReducer.user)
   
    return(
        <>
               <Card style={{ width: '18rem', margin:'20px' }}>
                <Card.Img variant="top" src={el?.imageP?.imgUrl} />
                <Card.Body>
                    <Card.Title>{el.name}</Card.Title>
                    <Card.Text>{el.description}</Card.Text>
                    <Card.Text>{el.price}</Card.Text>
                    <Card.Text>{el.reference}</Card.Text>
                    <Rating name="read-only" value={el.rate} readOnly />
                    <br/>
          {
            (token && user.role =="admin") &&
            <>
                <Link to={`/editProduct/${el._id}`}>Edit</Link>
                <Button onClick={()=>dispatch(deleteProduct(el._id))}>Delete</Button>
            </>
          }
                 
                </Card.Body>
                </Card>
             {/* <Card  style={{width: '300px' }}>
                <Card.Img src={el.posterURL} style={{height :'400px'}} />
                <Card.Body>
                    <Card.name  style={{height :'30px'}}><Link to={`/home/${el.id}`}> {el.name}</Link></Card.name>
                    <br/>
                    <Card.Text>{el.description}</Card.Text>
                    <br/>
                    <br/>
                    <Card.Price>{el.Price}</Card.Price>
                    <br/>
                    <br/>
                    <Card.Reference>{el.Reference}</Card.Reference>
                    <br/>
                    <br/>
                    <Card.ImageI>{el.ImageI}</Card.ImageI>
                    <br/>
                    <Rating value={el.rating}  />
                    <br/>
                    <br/> */}
                    {/* <div className="Button"> */}
                    {/* <Edit Produit={Produit} Produits={Produits} setProduits={setProduits} setProduit={setProduit} />
                    <Button onClick={()=>handleDelete(Produit.id)}>Delete</Button> */}
                    {/* </div> */}
                {/* </Card.Body>
                </Card> */}
        </>
    )
}