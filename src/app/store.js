import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/userSlice";


export const store = configureStore({
  user: userReducer
});
