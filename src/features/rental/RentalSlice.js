import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RentalService from "./RentalService";

const RentalSlice = createSlice({

name : "rental",
initialState : {
    allRental : null,
    isLoading:null,
    isSuccess:null,
    isError:null,

    message:"",
    edit: {
        editcar: {},
        isEdit: false,
      },

},
reducers : {
    
    editData: (state,action)=>{

        state.edit.editcar = action.payload;
      state.edit.isEdit = true;
    },
    updateCar: (state,action) => {
        
    }
},

extraReducers :(builder) => {

    builder
    .addCase(getAllRentalCar.pending , (state, action)=> {
            state.isLoading = true,
            state.isSuccess = false,
            state.isError = false
        })
        .addCase(getAllRentalCar.fulfilled , (state, action)=> {
            state.isLoading = false,
            state.isSuccess = true,
            state.isError = false
            state.allRental = action.payload
           
            
        })
        .addCase(getAllRentalCar.rejected , (state, action)=> {
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = true,
            state.message = action.payload
        })
}



})


export const {editData} = RentalSlice.actions
export default RentalSlice.reducer




//get all rental car
export const getAllRentalCar = createAsyncThunk("GET/RENTALS", async(_,thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    
    
    try {
        return await RentalService.fetchAllRental(token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
        
    }
})


//Create all rental car
export const createRentalCar = createAsyncThunk("FETCH/RENTALS", async(formData,thunkAPI) => {
   console.log("1s", formData)
    let token = thunkAPI.getState().auth.user.token
   
    
    
    try {
        return await RentalService.addRentalCar(formData,token)
        
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
        
    }
})


//update  rental car
export const update = createAsyncThunk("UPDATE/RENTALS", async(updatedRental,thunkAPI) => {
 
    let token = thunkAPI.getState().auth.user.token
   
    
    
    try {
        return await RentalService.updateRental(updatedRental,token)
        
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
        
    }
})