import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import carService from "./carService";

const carSlice = createSlice({
    name: 'car',
    initialState:{
        allCar: null,
        singleCar:{},
        isLoading:false,
        isSuccess:false,
        isError:false,
        message:""
    },
    reducers: {},
    extraReducers: (builder) => {
      
        builder
        .addCase(getAllCar.pending, (state,action)=>{
            state.isLoading = true,
            state.isSuccess = false,
            state.isError = false
        })
        .addCase(getAllCar.fulfilled, (state,action)=>{
            state.isLoading = false,
            state.isSuccess = true,
            state.isError = false,
            state.allCar = action.payload
        })
        .addCase(getAllCar.rejected, (state,action)=>{
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = true
            state.message = action.payload
        })
        .addCase(getSingleCar.pending, (state,action) =>{
            state.isLoading = true,
            state.isSuccess = false,
            state.isError = false
        })
        .addCase(getSingleCar.fulfilled, (state,action) =>{
            state.isLoading = false,
            state.isSuccess = true,
            state.isError = false,
            state.singleCar = action.payload
        })
        .addCase(getSingleCar.rejected, (state,action) =>{
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = true
            
        })

    }
})

export default carSlice.reducer





//getAllCar

export const getAllCar = createAsyncThunk("GET/ALLCAR", async()=>{
    try {
        return await carService.fetchAllCar()   
    } catch (error) {
        console.log(error);
        
    }
})


//get single car

export const getSingleCar = createAsyncThunk("GET/SINGLECAR", async(id)=>{
    try {
       
        
        return await carService.fetchSingleCar(id)  
    } catch (error) {
        console.log(error);
        
    }
})