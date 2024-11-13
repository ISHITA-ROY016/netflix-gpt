import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GPTMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { gptMovies: movieResults, loading } = gpt;

  // Loader Component
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
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
      <div className="p-4 m-4 text-center text-gray-400">
        No movie suggestions found.
      </div>
    );
  }

  return (
    <div className="my-7 px-4">
      {/* Use grid layout to control the number of columns */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 justify-items-center">
        {movieResults.map((movieArray) =>
          movieArray?.map((movie) => (
            <div key={movie.id} className="w-full max-w-[200px]">
              <MovieCard movie={movie} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
