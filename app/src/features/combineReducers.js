import { combineReducers } from "@reduxjs/toolkit";
import windowSession from "./windowSessionSlice";
import installedApplication from "./installedApplicationSlice";

const combinedReducers = combineReducers({
  windowSession,
  installedApplication
})

export default combinedReducers;