import React from 'react'
import useUserhook from '../hooks/useUserhook'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateComponent = () => {
    const  {isLoading, isLoggedIn} = useUserhook()

    if(isLoading){
        return <h2>Loading....</h2>
    }


  return isLoggedIn ? <Outlet/> : <Navigate to=""/>
}

export default PrivateComponent