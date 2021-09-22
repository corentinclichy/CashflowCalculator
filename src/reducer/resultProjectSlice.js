import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rentaNet: 0,
  rentaBrut: 0,
  cashflow: 0,
  rentaNet: 0,
  fraisNotaire: 0,
};

const resultProjectSlice = createSlice({
  name: "resultProject",
  initialState,
  reducers: {
    getResultProject: (state, action) => {
      state.rentaNet = action.payload.rentaNet;
      state.rentaBrut = action.payload.rentaBrut;
      state.cashflow = action.payload.cashflow;
      state.rentNet = action.payload.rentNet;
    },
  },
});

export const { getResultProject } = resultProjectSlice.actions;

export const selectProjectResults = (state) => state.resultProject;

export default resultProjectSlice.reducer;
