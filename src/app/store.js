import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "../features/name/nameSlice";
import showResultReducer from "../features/showResult/showResultSlice";
import khodamReducer from "../features/khodam/khodamSlice";

export default configureStore({
  reducer: {
    name: nameReducer,
    showResult: showResultReducer,
    khodam: khodamReducer,
  },
});
