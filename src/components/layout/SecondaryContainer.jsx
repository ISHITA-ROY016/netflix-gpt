import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import useUpComingMovies from "../hooks/useUpcomingMovies";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies &&
    movies.upcomingMovies && (
      <div className="text-white pb-6 bg-black bg-radial-effect">
        <div className="-mt-72 sm:-mt-56 md:-mt-28 relative z-30">
          <MovieList title={"now playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"trending"} movies={movies.nowPlayingMovies} />
          {/* <MovieList title={"upcoming movies"} movies={movies.upcomingMovies} /> */}
          <MovieList
            title={"popular movies"}
            movies={movies.nowPlayingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
