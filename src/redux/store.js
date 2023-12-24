import { configureStore } from "@reduxjs/toolkit";
import boardsSlice from './boardsSlice'
import authSlice from './authSlice';

const store = configureStore({
    reducer : {
        auth: authSlice,
        boards : boardsSlice.reducer,
    }
})


export default store