import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
};

export const counterSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    allCars: (state, action) => {
      state.cars = [...action.payload];
    },
  },
});

export const { allCars } = counterSlice.actions;

export default counterSlice.reducer;
