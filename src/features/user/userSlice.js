import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchLoggedInUserOrders } from "./userAPI";

const initialState = {
  userOrder: [],
  status: "idle",
};

export const fetchLoggedInUserOrdersAsync = createAsyncThunk(
  "user/fetchLoggedInUserOrders",
  async (userId) => {
    const response = await fetchLoggedInUserOrders(userId);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedInUserOrdersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLoggedInUserOrdersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        // this info is diff from logged in user
        state.userOrder = action.payload;
      });
  },
});

export const selectUserOrder = (state) => state.user.userOrder;

export const { increment } = userSlice.actions;

export default userSlice.reducer;