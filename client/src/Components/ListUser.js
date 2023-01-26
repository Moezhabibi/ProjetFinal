import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getUsers } from '../Redux/Actions/AuthActions'
import CardUser from './CardUser'

const ListUser=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUsers())
    },[])
    const Users = useSelector(state => state.AuthReducer.Users )
    return(
        <div className='pro'>
          {
            Users.map(el => <CardUser el={el}/>)
          }
        </div>
    )
}
export default ListUser