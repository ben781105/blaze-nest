import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notificationOn: true,
}

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        toggleNotification: (state) => {
            state.notificationOn = !state.notificationOn;
        },
        
    },
});

export const { toggleNotification} = settingsSlice.actions;
export default settingsSlice.reducer;