import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
  name: "name",
  initialState: "",
  reducers: {
    setName: (state, action) => action.payload,
  },
});

export const { setName } = nameSlice.actions;
export default nameSlice.reducer;
