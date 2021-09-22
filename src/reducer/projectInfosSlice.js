import { createSlice } from "@reduxjs/toolkit";

import { projectItems } from "../data/data";

const initialState = {
  price: projectItems[0].value,
  work: projectItems[1].value,
  notaire: projectItems[2].value,
  commission: projectItems[3].value,
  apport: projectItems[4].value,
  rent: projectItems[5].value,
  morgageLength: projectItems[6].value,
  morgageInterest: projectItems[7].value,
  chargeCopro: projectItems[8].value,
  taxeFonciere: projectItems[9].value,
};

const projectInfosSlice = createSlice({
  name: "projectInfos",
  initialState,
  reducers: {
    addProjectPriceInfos: (state, action) => {
      state.price = +action.payload;
    },
    addProjectWorkInfos: (state, action) => {
      state.work = +action.payload;
    },
    addProjectApportInfos: (state, action) => {
      state.apport = +action.payload;
    },
    addProjectRentInfos: (state, action) => {
      state.rent = +action.payload;
    },
    addProjectMorgageLengthInfos: (state, action) => {
      state.morgageLength = +action.payload;
    },
    addProjectMorgageInterestInfos: (state, action) => {
      state.morgageInterest = +action.payload;
    },
    addProjectCommissionInfos: (state, action) => {
      state.commission = +action.payload;
    },
    addProjectNotaireInfos: (state, action) => {
      state.notaire = +action.payload;
    },
    addProjectChargeCoproInfos: (state, action) => {
      state.chargeCopro = +action.payload;
    },
    addProjectTaxeFonciereInfos: (state, action) => {
      state.taxeFonciere = +action.payload;
    },
  },
});

export const {
  addProjectPriceInfos,
  addProjectWorkInfos,
  addProjectApportInfos,
  addProjectRentInfos,
  addProjectMorgageLengthInfos,
  addProjectMorgageInterestInfos,
  addProjectCommissionInfos,
  addProjectNotaireInfos,
  addProjectChargeCoproInfos,
  addProjectTaxeFonciereInfos,
} = projectInfosSlice.actions;

export const selectProjectInfos = (state) => state.projectInfos;

export default projectInfosSlice.reducer;
