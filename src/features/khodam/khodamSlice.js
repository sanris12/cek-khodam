import { createSlice } from "@reduxjs/toolkit";

export const khodamSlice = createSlice({
  name: "khodam",
  initialState: "",
  reducers: {
    setKhodam: (state, action) => action.payload,
  },
});

export const { setKhodam } = khodamSlice.actions;
export default khodamSlice.reducer;
