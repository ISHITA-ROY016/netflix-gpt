import { useEffect } from "react";
import { NOW_PLAYING_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  // fetching data from tmdb movies api and updating movie store
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const url =
      "https://streaming-availability.p.rapidapi.com/shows/search/filters?country=in&series_granularity=show&order_direction=desc&order_by=popularity_1week&year_min=2024&show_original_language=en&genres_relation=and&output_language=en&show_type=movie";
    const data = await fetch(url, NOW_PLAYING_API_OPTIONS);
    const json = await data.json();
    console.log(json.shows);
    dispatch(addNowPlayingMovies(json.shows));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
