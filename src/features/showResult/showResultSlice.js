import { createSlice } from "@reduxjs/toolkit";

export const showResultSlice = createSlice({
  name: "showResult",
  initialState: false,
  reducers: {
    setShowResult: (state) => !state,
  },
});

export const { setShowResult } = showResultSlice.actions;
export default showResultSlice.reducer;
