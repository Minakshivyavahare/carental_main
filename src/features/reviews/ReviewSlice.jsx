import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import reviewService from "./ReviewService";

const ReviewSlice = createSlice({
  name: "review",
  initialState: {
    allReviews: [],
    isLoading: false,
    isError: false,
    message: "",
    isSuccess: false,
  },


  reducers : {},

  extraReducers : (builder) => {
    builder
    .addCase(getReview.pending, (state, action)=> {
      state.isLoading = true,
      state.isError = false,
      state.isSuccess = false
    })
    .addCase(getReview.fulfilled, (state, action)=> {
      state.isLoading = false,
      state.isError = false,
      state.isSuccess = true,
      state.allReviews = action.payload || []
    })
    .addCase(getReview.rejected, (state, action)=> {
      state.isLoading = false,
      state.isError = true,
      state.isSuccess = false,
      state.message = action.payload
    })

    .addCase(addReview.pending, (state, action)=> {
      state.isLoading = true,
      state.isError = false,
      state.isSuccess = false
    })
    .addCase(addReview.fulfilled, (state, action)=> {
      state.isLoading = false,
      state.isError = false,
      state.isSuccess = true,
      state.allReviews.unshift(action.payload)
    })
    .addCase(addReview.rejected, (state, action)=> {
      state.isLoading = false,
      state.isError = true,
      state.isSuccess = false,
      state.message = action.payload
    })


    
  }
});

export default ReviewSlice.reducer


export const getReview = createAsyncThunk('GET/REVIWEW', async(id, thunkAPI)=> {

   let token = thunkAPI.getState().auth.user.token


try {
    return await reviewService.fetchReview(id,token)
} catch (error) {
    const message = error.response.message
   return thunkAPI.rejectWithValue(message)
}

})

export const addReview = createAsyncThunk('Add/Review', async({reviewform, carid}, thunkAPI)=> {

  let token = thunkAPI.getState().auth.user.token
  console.log(`reviewform`,reviewform, carid);
  
  try {
    return await  reviewService.getaddReview( {reviewform, carid}, token)
  } catch (error) {
    const message = error.response.message
    return thunkAPI.rejectWithValue(message)
  }
})



