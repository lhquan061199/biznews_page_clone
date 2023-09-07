import { createSlice } from "@reduxjs/toolkit";
import { getCategory } from "../service/categoriesService";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    loading: false,
    error: "",
  },
  reducer: {},
  extraReducers: {
    [getCategory.fulfilled]: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
  },
});

const { reducer: categoryReducer } = categorySlice;

export default categoryReducer;
