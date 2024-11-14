import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies:null,
    loading: false,
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
    setLoading: (state, action)=>{
      state.loading=action.payload;
    }
  },
});

export const { toggleGptSearchView, addGptMovieResults, clearGptMovieResults, setLoading } = gptSlice.actions;
export default gptSlice.reducer;
