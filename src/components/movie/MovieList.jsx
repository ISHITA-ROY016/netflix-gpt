import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="px-6 md:px-12 mb-4">
      <h1 className="text-2xl md:text-3xl font-bold py-4">{title}</h1>
      <div className="flex space-x-1 md:space-x-3 overflow-x-scroll scrollbar-hide">
        {movies?.map((movie) => (
          <MovieCard movie={movie}  key={movie.id}/>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
