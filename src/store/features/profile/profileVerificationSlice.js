import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  verificationMethod: null,
  fullName: "",
  institutionName: "",
  idNumber: "",
  idFront: null,
  idBack: null,
  step: 1,
};

const profileVerificationSlice = createSlice({
  name: "profileVerification",
  initialState,
  reducers: {
    setVerificationMethod: (state, action) => {
      state.verificationMethod = action.payload;
    },
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    setInstitution: (state, action) => {
      state.institutionName = action.payload;
    },
    setIdNumber: (state, action) => {
      state.idNumber = action.payload;
    },
    setIdFront: (state, action) => {
      state.idFront = action.payload;
    },
    setIdBack: (state, action) => {
      state.idBack = action.payload;
    },
    setNextStep: (state) => {
      state.step++;
    },
    setPreviousStep: (state) => {
      state.step--;
    },
  },
});

export const {
  setVerificationMethod,
  setFullName,
  setInstitution,
  setIdNumber,
  setIdBack,
  setIdFront,
  setNextStep,
  setPreviousStep,
} = profileVerificationSlice.actions;

export default profileVerificationSlice.reducer;
