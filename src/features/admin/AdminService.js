import axios from "axios"

const base_url = "https://car-rental-app-5d25.onrender.com"

const FetchAllrental = async(token) => {

    const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }


    console.log("Admin portal is working");
    const response = await axios.get(base_url + '/api/admin/rentals', options)
    // console.log( 'ADMIN', response.data);
    return response.data
    
      
}




///create new car service 

const AddNewcar=async(FormData,token)=>{
   
    const options = {
        headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
            
        }
    };
      try {
        const response = await axios.post(base_url + '/api/admin/car', FormData.formData, options);
        return response.data
      } catch (error) {
        console.log(error.mesage)
        throw new error
      }
}



//cara rental updata 

const updatarental = async ({formData: data,id}, token) => {
  console.log("formData", data)
  console.log(id)
  try {
    const response = await axios.put(base_url + `/api/admin/car/${id}`, data, {
        headers: {
            authorization: `Bearer ${token}`,
            // "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
    
  } catch (error) {
    console.log('error', error)
     throw new error
  }
   
};




// delete  rental car

const deleterental=async(id,token)=>{

    const options = {
        headers: {
            authorization: `Bearer ${token}`,
            
        }
    };
    const response =await axios.delete(base_url + `/api/admin/car/${id}`, options)
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