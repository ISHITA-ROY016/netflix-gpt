import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "../video/VideoTitle";
import VideoBg from "../video/VideoBg";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies === null) return;

  const mainMovie = movies[0];
  console.log(mainMovie);

  const { originalTitle, overview, imdbId } = mainMovie;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <VideoBg movieId={imdbId} />
      <div className="relative z-10">
        <VideoTitle title={originalTitle} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
