import { asyncThunkCreator, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AdminService from "./AdminService";


const AdminSlice = createSlice({

name : "admin",
initialState : {
    adminrental : null,
    Creatcar:null,
    
    AdminEdit:{adimiEdit:{},isedit:false},
    Updatecar:null,
    isLoading : false,
    isSuccess : false,
    messsage : "",

},


reducers : {
    Adminedit: (state, action) => {
        return {
          ...state,
          AdminEdit: { adimiEdit: action.payload, isedit: true },
        };
      },
},

extraReducers : (builder) => {

    builder
    .addCase(getAdminRental.pending, (state, action) => {
        state.isLoading = true,
        state.isSuccess = false,
        state.isError = false
    })
    .addCase(getAdminRental.fulfilled, (state, action) => {
        state.isLoading = false,
        state.isSuccess = true,
        state.isError = false
        state.adminrental = action.payload
    })
    .addCase(getAdminRental.rejected, (state, action) => {
        state.isLoading = false,
        state.isSuccess = false,
        state.isError = true
        state.adminrental = null,
        state.messsage = action.payload
    })




    //ceate new add to rental car
    .addCase(CreateRentalcar.pending, (state, action) => {
        state.isLoading = true,
        state.isSuccess = false,
        state.isError = false
    })
    .addCase(CreateRentalcar.fulfilled, (state, action) => {
      
        state.isLoading = false,
        state.isSuccess = true,
        state.isError = false
        state.Creatcar = action.payload
    })
    .addCase(CreateRentalcar.rejected, (state, action) => {
        state.isLoading = false,
        state.isSuccess = false,
        state.isError = true
        state.Creatcar = null,
        state.messsage = action.payload
    })



//updata  single rental car
.addCase(Updaterental.pending, (state, action) => {
    state.isLoading = true,
    state.isSuccess = false,
    state.isError = false
})
.addCase(Updaterental.fulfilled, (state, action) => {
  
    state.isLoading = false,
    state.isSuccess = true,
    state.isError = false
    state.Updatecar = action.payload
})
.addCase(Updaterental.rejected, (state, action) => {
    state.isLoading = false,
    state.isSuccess = false,
    state.isError = true
    state.Creatcar = null,
    state.messsage = action.payload
})


//rental car Delete
.addCase(Deleterental.pending, (state, action) => {
    state.isLoading = true,
    state.isSuccess = false,
    state.isError = false
})
.addCase(Deleterental.fulfilled, (state, action) => {
  
    state.isLoading = false,
    state.isSuccess = true,
    state.isError = false
   
})
.addCase(Deleterental.rejected, (state, action) => {
    state.isLoading = false,
    state.isSuccess = false,
    state.isError = true
  
    state.messsage = action.payload
})

},




})

export const {Adminedit}=AdminSlice.actions
export default AdminSlice.reducer

export const getAdminRental = createAsyncThunk("GET/adminRENTAL", async( _, thunkAPI)=> {

    const token =  thunkAPI.getState().auth.user.token


    try {
        return await AdminService.FetchAllrental(token)
    } catch (error) {
        // console.log(error.message);
        const message = error.response.data.message
       return thunkAPI.rejectWithValue(message)
    }
} )



//create new rental cars related thunk



export const  CreateRentalcar=createAsyncThunk('CREATE/CARRENTAL',async(FormData,thunkAPI)=>{
    const token =  thunkAPI.getState().auth.user.token
    try {
return await AdminService.AddNewcar(FormData,token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})



 // admin updata cara rental

 export const Updaterental=createAsyncThunk('UPDATA/RENTAL',async(updataFormData,thunkAPI)=>{
    const token =  thunkAPI.getState().auth.user.token
try {
    return await AdminService.updatarental(updataFormData,token)
} catch (error) {
    const message = error.response.data.message
    thunkAPI.rejectWithValue(message)
}
 })



 //admin delete rental car 

 export const Deleterental=createAsyncThunk('DELETE/RENTAL',async(id,thunkAPI)=>{
    const token =  thunkAPI.getState().auth.user.token
try {
    return await AdminService.deleterental(id,token)
} catch (error) {
    const message = error.response.data.message
    thunkAPI.rejectWithValue(message)
}
 })



// import { asyncThunkCreator, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import AdminService from "./AdminService";


// const AdminSlice = createSlice({

// name : "admin",
// initialState : {
//     adminrental : null,
//     isLoading : false,
//     isSuccess : false,
//     messsage : "",

// },


// reducers : {},

// extraReducers : (builder) => {

//     builder
//     .addCase(getAdminRental.pending, (state, action) => {
//         state.isLoading = true,
//         state.isSuccess = false,
//         state.isError = false
//     })
//     .addCase(getAdminRental.fulfilled, (state, action) => {
//         state.isLoading = false,
//         state.isSuccess = true,
//         state.isError = false
//         state.adminrental = action.payload
//     })
//     .addCase(getAdminRental.rejected, (state, action) => {
//         state.isLoading = false,
//         state.isSuccess = false,
//         state.isError = true
//         state.adminrental = null,
//         state.messsage = "API is not working"
//     })

// },




// })

// export default AdminSlice.reducer


// export const getAdminRental = createAsyncThunk("GET/adminRENTAL", async( _, thunkAPI)=> {

//     const token =  thunkAPI.getState().auth.user.token


//     try {
//         return await AdminService.FetchAllrental(token)
//     } catch (error) {
//         // console.log(error.message);
//         const message = error.response.data.message
//         thunkAPI.rejectWithValue(message)
//     }
// } )




