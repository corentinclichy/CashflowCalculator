import { configureStore } from "@reduxjs/toolkit";

import projectInfosReducer from "../reducer/projectInfosSlice";
import resultProjectSlice from "../reducer/resultProjectSlice";

export const store = configureStore({
  reducer: {
    projectInfos: projectInfosReducer,
    resultProject: resultProjectSlice,
  },
});
