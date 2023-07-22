import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/UserSlice";
import userReducer1 from "./redux/UserDoubtSlice";

export const store = configureStore({
    reducer:{
        user: userReducer,
        userDoubt: userReducer1
    }
})