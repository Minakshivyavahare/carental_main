import { configureStore } from "@reduxjs/toolkit";
import car from '../features/AllCar/carSlice'


const store = configureStore({
    reducer: {
      car
    }
})

export default store;