import { configureStore } from "@reduxjs/toolkit";
import car from '../features/AllCar/carSlice'
import auth from '../features/auth/AuthSlice'
import rental from '../features/rental/RentalSlice'
import admin from '../features/admin/AdminSlice'
import review from '../features/reviews/ReviewSlice'


const store = configureStore({
    reducer: {
      car, auth, rental,admin, review

    }
})

export default store;