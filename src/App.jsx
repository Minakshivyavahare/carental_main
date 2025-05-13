import React from 'react'
import Headar from './component/Headar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

import Footer from './component/Footer'
import CarDetails from './pages/CarDetails'
import UserDasboard from './pages/UserDashboard'
 import PrivateComponent from './component/PrivateComponent'
import UserAddCar from './pages/UserAddCar'
import SearchCar from './pages/SearchCar'
import AdminDashboard from './pages/AdminDashboard'
import AdminUsertable from './pages/AdminUsertable'
import UserRentalDetail from './pages/UserRentalDetail'
import AddNewrental from './pages/AddNewrental'
import Adminallrental from './component/admin_component/Adminallrental'

 import { Link } from 'react-router-dom';
import Service from './pages/Service'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'
import TermsCondition from './pages/TermsCondition'
import { ToastContainer } from 'react-toastify';

 
 


const App = () => {


  return (
    <Router>
    
      <Headar/>
      <Routes>

       
          <Route path='/' element={ <Home/>} />
          <Route path="*" element={<PageNotFound/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        
        
        <Route path='/cardetail/:carid' element={ <CarDetails/>} />
        <Route path="/search/:carQuery" element={<SearchCar/>} />
        
      
      
        <Route path="/service" element={<Service/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/term" element={<TermsCondition/>} />
      
     
        <Route path="/" element={<PrivateComponent />}>
        <Route path="user" element={<UserDasboard/>} />
        <Route path='admin' element={ <AdminDashboard/>} />
        <Route path="adminusertable" element={<AdminUsertable/>} />
        <Route path="userrentaldetail" element={<UserRentalDetail/>} />
        <Route path="adminaddnewcar" element={<AddNewrental/>} />
        <Route path="Adminallrental" element={<Adminallrental/>} />
        <Route path="useraddcar" element={<UserAddCar/>} />
        </Route>
      
      </Routes>
     
      <Footer/>
      <ToastContainer />
    </Router>
    
   
    
  )
}

export default App