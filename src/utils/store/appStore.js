import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import preferenceReducer from "./preferenceSlice";

const appStore = configureStore({
    reducer : {
        user: userReducer,
        movies: moviesReducer,
        preferences: preferenceReducer,
    }
});

export default appStore;