import axios from "axios"

const fetchAllCar = async(page = 1) => {
    const response = await axios.get(`/api/car?page=${page}`)
    return response.data
}

const fetchSingleCar = async(id) => {
    const response = await axios.get("/api/car/" +id)
     return response.data
}

const searchCar = async(searchTerm) => {
    const response = await axios.get(`/api/car/search?query=${searchTerm}`)

    console.log("search",response.data);
    
     return response.data
}


const carService = {fetchAllCar, fetchSingleCar, searchCar}

export default carService