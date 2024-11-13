import React from "react";
import {useSelector} from "react-redux";
import useTrailers from "../hooks/useTrailers";


const VideoBg = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideos);

  useTrailers(movieId);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {trailerVideo ? (
        <video className="w-full h-2/3 md:h-full aspect-video object-cover" controls preload="auto" autoPlay loop muted>
          <source src={trailerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};

export default VideoBg;
