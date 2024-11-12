import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GPTMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { gptMovies: movieResults, loading } = gpt;

  // Loader Component
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
          {/* Tailwind CSS Loader */}
          <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  // Check if movieResults is falsy or an empty array
  if (!movieResults || movieResults.length === 0) {
    return (
      <div className="p-4 m-4 text-gray-400">No movie suggestions found.</div>
    );
  }

  return (
    <div className="my-7 flex flex-wrap justify-center gap-2">
      {movieResults.map((movieArray) =>
        movieArray?.map((movie) => <MovieCard movie={movie} key={movie.id} />)
      )}
    </div>
  );
};

export default GPTMovieSuggestions;
