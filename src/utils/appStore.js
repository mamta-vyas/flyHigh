import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";


const appStore = configureStore({
    
    // below reducer will have different reducer for different slices
    reducer: {
      user: userReducer,
    }
})

export default appStore;