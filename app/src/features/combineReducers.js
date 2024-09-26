import { combineReducers } from "@reduxjs/toolkit";
import windowSession from "./windowSessionSlice";
import installedApplication from "./installedApplicationSlice";
import files from './filesSlice'
import directory from "./directorySlice";

const combinedReducers = combineReducers({
  windowSession,
  installedApplication,
  directory,
  files,
})

export default combinedReducers;