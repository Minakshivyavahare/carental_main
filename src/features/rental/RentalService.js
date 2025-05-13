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


//add new rental car
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

 return response.data
 
}

//updaterental car
const updateRental = async(updatedRental,token) => {

    const {id, pickupDate, dropDate} = updatedRental
    

  const options = {
    headers: {
       authorization: `Bearer ${token}`
    }
  } 

  const response = await axios.put(`/api/rentals/${id}`,{pickupDate, dropDate},options)
 console.log("myyyyyyyyyy", response.data)
  return response.data

}
const RentalService = {fetchAllRental, addRentalCar, updateRental}
export default RentalService