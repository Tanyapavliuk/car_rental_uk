import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [], // Змінено на об'єкт з властивістю cars
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    allCars: (state, action) => {
      const updatedCars = Array.isArray(action.payload) ? action.payload : [];

      return {
        ...state,
        cars: [...state.cars, ...updatedCars],
      };
    },
  },
});

export const { allCars } = carsSlice.actions;

export default carsSlice.reducer;
