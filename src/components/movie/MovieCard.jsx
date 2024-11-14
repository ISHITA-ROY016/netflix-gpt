import React from "react";

const MovieCard = ({ movie }) => {
  const poster = movie.imageSet?.verticalPoster?.w480;

  // If there's no poster, return nothing
  if (!poster) return null;

  return (
    <div className="min-w-[200px] h-[250px] md:h-[280px] lg:h-[320px]">
      <img
        src={poster}
        alt={movie.title}
        className="w-auto h-full rounded-lg shadow-lg"
      />
    </div>
  );
};

export default MovieCard;
