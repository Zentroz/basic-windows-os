import { combineReducers } from "@reduxjs/toolkit";
import windowSessionSlice from "./windowSessionSlice";

const combinedReducers = combineReducers({
  windowSessionSlice
})

export default combinedReducers;