import { configureStore } from "@reduxjs/toolkit";
import car from '../features/AllCar/carSlice'
import auth from '../features/auth/AuthSlice'
import rental from '../features/rental/RentalSlice'


const store = configureStore({
    reducer: {
      car, auth, rental

    }
})

export default store;