import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../slices/categorySlice";
import topViewReducer from "../slices/topViewSlice";

const rootReducer = {
  category: categoryReducer,
  topview: topViewReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
