import React from 'react'
import Headar from './component/Headar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminMain from './component/admin_component/AdminMain'
import Footer from './component/Footer'
import CarDetails from './pages/CarDetails'
import UserDasboard from './pages/UserDashboard'
 import PrivateComponent from './component/PrivateComponent'
import UserAddCar from './pages/UserAddCar'
import SearchCar from './pages/SearchCar'

 


const App = () => {
  return (
    <Router>
      
      <Headar/>
      <Routes>

       
          <Route path='/' element={ <Home/>} />
         
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        
         <Route path='/admin' element={ <AdminMain/>} />
        <Route path='/cardetail/:carid' element={ <CarDetails/>} />
        <Route path="/user" element={<UserDasboard/>} />
        <Route path="/useraddcar" element={<UserAddCar/>} />
        <Route path="/search/:carQuery" element={<SearchCar/>} />
        
        <Route path="" element={<PrivateComponent />}>
     
     </Route> 
      
      </Routes>

     
     <Footer/>
    </Router>
  )
}

export default App