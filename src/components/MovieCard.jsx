import React from "react";

const MovieCard = ({ movie }) => {
  const poster = movie.imageSet?.horizontalPoster?.w480;
  // console.log(poster);
  return (
    <div className="w-64 min-w-[16rem] h-auto">
      <img src={poster} alt={movie.title} className="w-full h-auto rounded-lg shadow-md" />
    </div>
  );
};

export default MovieCard;
