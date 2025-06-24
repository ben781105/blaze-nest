import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./features/ui/uiSlice";
import userReducer from './profile/ProfileSlice'
import settingsReducer from './features/ui/SettingsSlice'
export const store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    settings:settingsReducer
  },
});
