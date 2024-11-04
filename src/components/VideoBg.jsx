import React, { useEffect, useState } from "react";
import { TRAILER_API_OPTIONS } from "../utils/constants";

const VideoBg = ({ movieId }) => {
  const [trailerUrl, setTrailerUrl] = useState("");

  const getMovieTrailer = async () => {
    const url = "https://imdb146.p.rapidapi.com/v1/title/?id=" + movieId;
    const data = await fetch(url, TRAILER_API_OPTIONS);
    const json = await data.json();
    console.log(json.primaryVideos);

    const trailer = json.primaryVideos?.edges[0]?.node?.playbackURLs[0]?.url;
    console.log(trailer);

    if (trailer) {
      setTrailerUrl(trailer);
    }
  };

  useEffect(() => {
    getMovieTrailer();
    return () => {
      setTrailerUrl(""); // Clear the URL when component unmounts
    };
  }, []);

  return (
    <div>
      {" "}
      {trailerUrl ? (
        <video width="560" height="315" controls preload="auto">
          <source src={trailerUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};

export default VideoBg;
