import { configureStore } from "@reduxjs/toolkit";
import reducer from '../features/combineReducers';

const store = configureStore({
  reducer
});

export default store;