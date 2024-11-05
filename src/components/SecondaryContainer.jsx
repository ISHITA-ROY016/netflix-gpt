import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black text-white pb-6">
        <div className="-mt-28 relative z-30">
          <MovieList title={"now playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"trending"} movies={movies.nowPlayingMovies} />
          <MovieList
            title={"upcoming movies"}
            movies={movies.nowPlayingMovies}
          />
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
