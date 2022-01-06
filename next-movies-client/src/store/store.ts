import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./loader.slice";
import moviesSlice from "./movies-slice";

const store = configureStore({
    reducer: {
      movies: moviesSlice.reducer,
      isLoading: loaderSlice.reducer
    },
  })
  export type RootState = ReturnType<typeof store.getState>
  
  export default store
