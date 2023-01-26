import './App.css';
import NavUser from './Components/NavUser';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Profil from './Components/Profil';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import ErrorsC from './Components/ErrorsC';
import EditUser from './Components/EditUser';
import ListUser from './Components/ListUser';
import ListProduits from './Components/ListProduits'
import { AddProduit } from './Components/AddProduit';
import EditProduct from './Components/EditProduit';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { current } from './Redux/Actions/AuthActions';
import EditProfil from './Components/EditProfil';


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(current())
  },[])
  return (
    <div>
    <NavUser/>
    <ErrorsC/>
    <Routes>
      < Route path ='/' element ={<Home/>} />
      < Route path='/register' element={<Register/>} />
      < Route path='/profil' element={<PrivateRoute><Profil/></PrivateRoute>} />
      < Route path='login' element={<Login/>} />
      <Route path='/listUser' element={<ListUser/>}/>
      <Route path='/editUser/:id' element={<EditUser/>}/>
      <Route path='/ListProduits' element={<ListProduits/>}/>
      <Route path='/addProduit' element={<AddProduit/>}/>
      <Route path='/editProduct/:id' element={<EditProduct/>}/>
      <Route path='/editProfil/:id' element={<EditProfil/>}/>
    </Routes>
  </div>
  );
}

export default App;
