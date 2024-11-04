import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBg from "./VideoBg";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies === null) return;

  const randomIndex = Math.floor(Math.random() * movies?.length);
  //   console.log(randomIndex);

  const mainMovie = movies[randomIndex];
  console.log(mainMovie);

  const { originalTitle, overview, tmdbId, imdbId } = mainMovie;
  const movieId = tmdbId.split("/")[1];

  return (
    <div>
      <VideoTitle title={originalTitle} overview={overview} />
      <VideoBg movieId={imdbId} />
    </div>
  );
};

export default MainContainer;
