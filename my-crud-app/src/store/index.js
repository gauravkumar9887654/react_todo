import { configureStore } from "@reduxjs/toolkit";
import  UserData from "./UserData-slice";
const store=configureStore({
    reducer:{
user:UserData.reducer,
    }
});
export default store;