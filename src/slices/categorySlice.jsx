import { createSlice } from "@reduxjs/toolkit";
import { getCategory } from "../service/categoriesService";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    a: [],
    loading: false,
    error: "",
  },
  reducer: {},
  extraReducers: {
    // [getCategory.pending]: (state) => {
    //     state.loading = true

    // },
    // [getCategory.rejected]:(state) => {
    //     state.loading = false
    //     state.error = ''

    // },
    [getCategory.fulfilled]: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
  },
});

const { reducer: categoryReducer } = categorySlice;

export default categoryReducer;
