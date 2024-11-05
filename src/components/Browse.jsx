import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useUpComingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  useUpComingMovies();
  return (
    <div>
      <Header />
      {/*
        MainContainer
          - VideoBackground
          - VideoTitle
        SecondaryContainer
          - MovieList * n
          - cards * n
       */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
