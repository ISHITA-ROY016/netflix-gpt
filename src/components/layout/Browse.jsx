import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "../MainContainer";
import SecondaryContainer from "../SecondaryContainer";
import useUpComingMovies from "../../hooks/useUpcomingMovies";
import GPTSearch from "../gpt/GPTSearch";
import { useDispatch, useSelector } from "react-redux";
import { clearGptMovieResults } from "../../utils/redux/gptSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  useUpComingMovies();

  useEffect(() => {
    if (!showGptSearch) {
      dispatch(clearGptMovieResults());
    }
  }, [showGptSearch, dispatch]);
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
