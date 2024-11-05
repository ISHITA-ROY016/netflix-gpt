import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import getMovieByTitle from "../components/getMovieByTitle";

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const url = "https://movies-tv-shows-database.p.rapidapi.com/?page=1";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "0bd6ee3cbdmsh4bbd37d9e53dd20p1509b9jsn86f3fd4488be",
        "x-rapidapi-host": "movies-tv-shows-database.p.rapidapi.com",
        Type: "get-recently-added-movies",
      },
    };

    try {
      const data = await fetch(url, options);
      const json = await data.json();

      // Fetch additional details for each movie by title
      const movieDetailsPromises = json.movie_results.map((movie) =>
        getMovieByTitle(movie.title)
      );

      const movieDetails = (await Promise.all(movieDetailsPromises)).filter(
        (details) => details !== null && details !== undefined
      );

      console.log(movieDetails);

      dispatch(addUpcomingMovies(movieDetails));
    } catch (error) {
      console.error("Failed to fetch upcoming movies:", error);
    }
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpComingMovies;
