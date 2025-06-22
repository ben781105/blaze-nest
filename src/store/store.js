import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./features/ui/uiSlice";
import userReducer from './profile/ProfileSlice'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
  },
});
