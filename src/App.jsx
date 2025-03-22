import React from 'react'
import Headar from './component/Headar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminMain from './component/admin_component/AdminMain'
import Footer from './component/Footer'
import CarDetails from './pages/CarDetails'

const App = () => {
  return (
    <Router>
      
      <Headar/>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/login' element={ <Login/>} />
        <Route path='/register' element={ <Register/>} />
        <Route path='/admin' element={ <AdminMain/>} />
        <Route path='/cardetail/:carid' element={ <CarDetails/>} />
      </Routes>
     <Footer/>
    </Router>
  )
}

export default App