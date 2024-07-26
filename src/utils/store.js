import appSlice from "./appSlice";
import { configureStore } from "@reduxjs/toolkit";
import Chartslice from "./Chartslice";
const store = configureStore({
reducer:{
    app:appSlice,
    chat :Chartslice
},
});

export default store;