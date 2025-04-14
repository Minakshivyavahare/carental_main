import axios from "axios"


const FetchAllrental = async(token) => {

    const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }


    console.log("Admin portal is working");
    const response = await axios.get('/api/admin/rentals', options)
    // console.log( 'ADMIN', response.data);
    return response.data
    
      
}




///create new car service 

const AddNewcar=async(FormData,token)=>{
    const options = {
        headers: {
            authorization: `Bearer ${token}`,
            
        }
    };
 

        const response = await axios.post('/api/admin/car', FormData, options);
 return response.data



}



//cara rental updata 


const updatarental=async(updataFormData,token)=>{
    const options = {
        headers: {
            authorization: `Bearer ${token}`,
        }
    };
    const response =await axios.put(`/api/admin/car/${ updataFormData._id}`,updataFormData, options)
   return response.data
}



// delete  rental car

const deleterental=async(id,token)=>{

    const options = {
        headers: {
            authorization: `Bearer ${token}`,
            
        }
    };
    const response =await axios.delete(`/api/admin/car/${id}`, options)
   console.log( response.data)
}













const AdminService = {FetchAllrental ,AddNewcar,updatarental,deleterental}

export default AdminService


// import axios from "axios"


// const FetchAllrental = async(token) => {

//     const options = {
//         headers : {
//             authorization : `Bearer ${token}`
//         }
//     }


   
//     const response = await axios.get('/api/admin/rentals', options)
  
//     return response.data
    
      
// }



// const AdminService = {FetchAllrental}

// export default AdminService