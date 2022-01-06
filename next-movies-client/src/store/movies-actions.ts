import { Dispatch } from "@reduxjs/toolkit";
import { loaderActions } from "./loader.slice";
import { moviesActions } from "./movies-slice";

const URL = 'http://localhost:8080/movies'
export const fetchMovies = () => {
  return async (dispatch: Dispatch ) => {
    dispatch(loaderActions.setLoader(true));

    try {
      const response = await fetch(URL);
      console.log('response: ', response);
      if (!response.ok) {
        dispatch(loaderActions.setLoader(false));
        throw new Error("Could not fetch cart data.");
      }
      const newMovies = await response.json();
      if (newMovies.length === 0) {
        dispatch(loaderActions.setLoader(false));
        throw new Error("No movies!");
      }
      dispatch(moviesActions.setAllMovies(newMovies));
      dispatch(moviesActions.setfilteredMovies(newMovies));
      dispatch(loaderActions.setLoader(false));
    } catch {
      dispatch(loaderActions.setLoader(false));
      throw new Error(`Can't access the url ${URL}`);
    }
  };
};
