import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "./AuthService";



const ExistingUser = JSON.parse(localStorage.getItem('user'))

const AuthSlice = createSlice({

name : "auth",
initialState : {
user :  ExistingUser || null,
isLoading : false,
isSuccess : false,
isError : false,
message : ""

},

reducers : {}, 

extraReducers : (builder)=> {

    builder
    .addCase(registerUser.pending , (state, action)=> {
        state.isLoading = true,
        state.isSuccess = false,
        state.isError = false
    })
    .addCase(registerUser.fulfilled , (state, action)=> {
        state.isLoading = false,
        state.isSuccess = true,
        state.isError = false
        state.user = action.payload
        // console.log(action.payload);
        
    })
    .addCase(registerUser.rejected , (state, action)=> {
        state.isLoading = false,
        state.isSuccess = false,
        state.isError = true,
        state.message = action.payload
    })



    builder
    .addCase(loginUser.pending , (state, action)=> {
        state.isLoading = true,
        state.isSuccess = false,
        state.isError = false
    })
    .addCase(loginUser.fulfilled , (state, action)=> {
        state.isLoading = false,
        state.isSuccess = true,
        state.isError = false
        state.user = action.payload
       
        
    })
    .addCase(loginUser.rejected , (state, action)=> {
        state.isLoading = false,
        state.isSuccess = false,
        state.isError = true,
        state.message = action.payload
    })

    .addCase(logOut.fulfilled , (state, action)=> {
        state.isLoading = false,
        state.isSuccess = true,
        state.isError = false
        state.user = null
        
        
    })
}






})

export default AuthSlice.reducer


// Register User API

export const registerUser = createAsyncThunk("AUTH/REGISTER", async(formData, thunkAPI)=>{
         
    try {
        return await AuthService.register(formData)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
        
    }
})

// Login User API

export const loginUser = createAsyncThunk("LOGIN/USER", async(loginData, thunkAPI)=> {
    try {
        
    return await AuthService.login(loginData)
    } catch (error) {        
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

// Logout User
export const logOut = createAsyncThunk("LOGOUT/USER", async()=> {
     
    localStorage.removeItem('user')
})



