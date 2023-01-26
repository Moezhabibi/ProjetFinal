import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../Redux/Actions/ProductActions'
import{ CardProduit} from './CardProduit'

const ListProduits=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProducts())
    },[])
    const  produits = useSelector(state => state.ProductReducer.produits )
    return(
        <div className='ListProduit'>
          {produits &&
             produits.map(el => <CardProduit key={el._id} el={el}/>)
          }
        </div>
    )
}
export default ListProduits