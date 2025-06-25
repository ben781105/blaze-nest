import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./features/ui/uiSlice";
import userReducer from "./features/profile/profileSlice";
import settingsReducer from "./features/ui/settingsSlice";
export const store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    settings: settingsReducer,
  },
});
