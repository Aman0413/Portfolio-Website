import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../../axiosClient/axiosClient";

export const adminLogin = createAsyncThunk(
  "login",
  async (name, email, password) => {
    const res = await axiosClient.post("/auth/login", {
      name,
      email,
      password,
    });
    return res.data;
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isLoading: false,
    data: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(adminLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = true;
      state.isError = false;
    });
    builder.addCase(adminLogin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(adminLogin.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default adminSlice.reducer;
