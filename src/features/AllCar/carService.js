import axios from "axios"

const fetchAllCar = async() => {
    const response = await axios.get("/api/car")
    return response.data
}

const fetchSingleCar = async(id) => {
   
    
     const response = await axios.get("/api/car/" +id)
     
    
    return response.data
}


const carService = {fetchAllCar, fetchSingleCar}

export default carService