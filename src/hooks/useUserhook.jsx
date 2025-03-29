import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const useUserhook = () =>{
    const {user} = useSelector((state) => state.auth)
    const[isLoggedIn, setLoggedIn] = useState(false)
    const[isLoading,setisLoading] = useState(true)
    

 

    useEffect(() =>{
        user ? setLoggedIn(true) : setLoggedIn(false)
        setisLoading(false)

       

    },[user])

    return {isLoading, isLoggedIn}
}

export default useUserhook;

