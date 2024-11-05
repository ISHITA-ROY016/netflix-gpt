import {useEffect} from 'react';
import { TRAILER_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideos } from "../utils/movieSlice";

function useTrailers(movieId) {
    const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const url = "https://imdb146.p.rapidapi.com/v1/title/?id=" + movieId;
    const data = await fetch(url, TRAILER_API_OPTIONS);
    const json = await data.json();
    // console.log(json.primaryVideos);

    const trailer = json.primaryVideos?.edges[0]?.node?.playbackURLs[0]?.url;

    // console.log(trailer);

    if (trailer) {
      dispatch(addTrailerVideos(trailer));
    }
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
}

export default useTrailers
