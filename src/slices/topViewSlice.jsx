import { createSlice } from "@reduxjs/toolkit";
import { getTopView } from "../service/topViewService";

const topViewSlice = createSlice({
  name: "topview",
  initialState: {
    topView: [],
    loading: false,
    error: "",
  },
  reducer: {},
  extraReducers: {
    [getTopView.fulfilled]: (state, action) => {
      state.loading = false;
      state.topView = action.payload;
    },
  },
});

const { reducer: topViewReducer } = topViewSlice;

export default topViewReducer;
