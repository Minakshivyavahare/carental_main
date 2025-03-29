import axios from "axios";


const fetchAllRental  = async(token) =>{
   const options = {
     headers: {
        authorization: `Bearer ${token}`
     }
   } 
  const response = await axios.get("/api/rentals", options)
  return response.data
  
}


const addRentalCar  = async(formData,token) =>{
  const id = formData.carid
 

  const options = {
    headers: {
       authorization: `Bearer ${token}`
    }
  } 
  const params = new URLSearchParams();
  params.append('dropDate', formData.dropDate1);
  params.append('pickupDate', formData.pickupDate1);
 
 const response = await axios.post(`/api/rentals/${id}`,params,  options)

 console.log(response.data)
 return response.data
 
}

const RentalService = {fetchAllRental, addRentalCar}
export default RentalService