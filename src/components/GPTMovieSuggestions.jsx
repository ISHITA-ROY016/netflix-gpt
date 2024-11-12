import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GPTMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const movieResults = gpt.gptMovies;

  // Check if movieResults is falsy or an empty array
  if (!movieResults || movieResults.length === 0) {
    return (
      <div className="p-4 m-4 text-gray-400">No movie suggestions found.</div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {movieResults.map((movieArray) =>
        movieArray?.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))
      )}
    </div>
  );
};

export default GPTMovieSuggestions;
