import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import carService from "./carService";

const carSlice = createSlice({
    name: 'car',
    initialState:{
        allCar: { cars: [], pagination:{} },
        singleCar:{},
        searchCar: [],
        isLoading:false,
        isSuccess:false,
        isError:false,
        message:""
    },
    reducers: {
        rentalcarremove: (state, action) => {
            return {
              ...state,
              allCar: {
                ...state.allCar,
                cars: state.allCar.cars.filter((item) => item._id !== action.payload),
              },
            };
          },

    },
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

           
            
            state.allCar.cars = action.payload.cars
            state.allCar.pagination = action.payload.pagination
          
           
            
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
        .addCase(getSearchCar.pending, (state,action) =>{
            state.isLoading = true,
            state.isSuccess = false,
            state.isError = false
        })
        .addCase(getSearchCar.fulfilled, (state,action) =>{
            state.isLoading = false,
            state.isSuccess = true,
            state.isError = false,
            state. searchCar = action.payload
        })
        .addCase(getSearchCar.rejected, (state,action) =>{
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = true
            
        })

    }
})

export const {rentalcarremove}=carSlice.actions
export default carSlice.reducer





//getAllCar

export const getAllCar = createAsyncThunk("GET/ALLCAR", async(page=1)=>{
    try {
        return await carService.fetchAllCar(page)   
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


//get search car

export const getSearchCar = createAsyncThunk("GET/SEARCHCAR", async(searchTerm)=>{
    try {
        return await carService.searchCar(searchTerm) 
    } catch (error) {
        console.log(error);
        
    }
})