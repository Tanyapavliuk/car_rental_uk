import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

export const FavoritesSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addFavorites: (state, { payload }) => {
      state.favorites.push({ ...payload });
    },
    removeFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter((item) => item.id !== payload);
    },
  },
});

export const { addFavorites, removeFavorites } = FavoritesSlice.actions;

export default FavoritesSlice.reducer;
