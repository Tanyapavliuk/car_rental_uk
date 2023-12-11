import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
  price: "",
  from: "",
  to: "",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilters: (state, { payload }) => (state = { ...payload }),
  },
});

export const { updateFilters } = filterSlice.actions;

export default filterSlice.reducer;
