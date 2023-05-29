import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../Api/apiSlice";
import authReducer from "../Features/authSlice";

export default configureStore({
    reducer: {
        // Here we will be adding reducers
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
    },
    middleware: GetDefaultMiddleware => 
        GetDefaultMiddleware().concat(apiSlice.middleware),
    devTools : true,
});


