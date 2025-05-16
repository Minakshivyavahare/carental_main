import axios from "axios"

const base_url = "https://car-rental-app-5d25.onrender.com"

const fetchAllCar = async(page = 1) => {
    
    try {
        const response = await axios.get(base_url + `/api/car?page=${page}`)
        console.log("response cars",response.data)
    return response.data
    } catch (error) {
        console.log("all cars", error)
    }
    
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