import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../../axiosClient/axiosClient";

export const fetchProject = createAsyncThunk("fetchProject", async () => {
  const res = await axiosClient.get("/project");
  return res.data;
});


const projectSlice = createSlice({
  name: "project",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProject.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProject.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProject.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

// export function fetchProject() {
//   return async function fetchProjectThunk(dispatch, getState) {
//     try {
//       const res = await axiosClient.get("/project");
//       dispatch(setProject(res.data));
//     } catch (err) {
//       console.log(err);
//     }
//   };
// }

// export const { setProject } = projectSlice.actions;
export default projectSlice.reducer;
