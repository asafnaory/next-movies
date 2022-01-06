import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../Models/movies.types";

interface MoviesState {
  allMovies: Movie[];
  filteredMovies: Movie[];
}

const initialState = {
  allMovies: [],
  filteredMovies: [],
} as MoviesState;

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setfilteredMovies(state, action) {
      state.filteredMovies = action.payload;
    },
    setAllMovies(state, action) {
      state.allMovies = action.payload;
    },
  },
});

export const moviesActions = moviesSlice.actions;
export default moviesSlice;
