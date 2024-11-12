import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies:null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResults: (state, action) => {
      state.gptMovies=action.payload;
    },
    clearGptMovieResults: (state) => {
      state.gptMovies = null;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResults, clearGptMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
