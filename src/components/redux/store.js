import { configureStore } from "@reduxjs/toolkit";

import projectSlices from "./slices/projectSlices";
import adminSlice from "./slices/adminSlice";

const store = configureStore({
  reducer: {
    project: projectSlices,
    admin: adminSlice,
  },
});

export default store;
