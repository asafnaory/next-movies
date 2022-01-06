import { createSlice } from "@reduxjs/toolkit";

interface LoaderState {
  isLoading: boolean;
}

const initialState = {
  isLoading: false,
} as LoaderState;

const loaderSlice = createSlice({
  name: "isLoading",
  initialState,
  reducers: {
    setLoader(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const loaderActions = loaderSlice.actions;
export default loaderSlice;
