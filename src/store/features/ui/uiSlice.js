import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Default",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = uiSlice.actions;
export default uiSlice.reducer;
