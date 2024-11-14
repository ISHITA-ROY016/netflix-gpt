import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { NOW_PLAYING_API_OPTIONS } from "../../utils/constants";
import openai from "../../utils/openai";
import { useDispatch } from "react-redux";
import { addGptMovieResults, setLoading } from "../../utils/redux/gptSlice";
import gptQuery from "../../utils/gptQuery";

const GPTSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
  
    if (!searchText.current.value) return;

    dispatch(setLoading(true));

    const gptquery = gptQuery(searchText.current.value);

    try {
      const completion = await openai.chat.completions.create({
        model: "microsoft/phi-3-medium-128k-instruct:free",
        messages: [
          {
            role: "user",
            content: gptquery,
          },
        ],
      });
      // console.log(completion.choices[0].message.content);
      const getMovies = completion.choices[0].message.content.split(/,\s*/);
      // console.log(getMovies);
      const movieArr = getMovies.map((movie) => fetchMovieDetails(movie)); // it will return a promise array

      // reads array of promises and resolves them into json output
      const movieResults = await Promise.all(movieArr);
      // Filter each element to have a max of 6 objects
      const limitedMovieResults = movieResults.map((movieArray) =>
        movieArray.slice(0, 6)
      );
      // console.log(limitedMovieResults);

      dispatch(addGptMovieResults(limitedMovieResults));
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const fetchMovieDetails = async (movie) => {
    const url =
      "https://streaming-availability.p.rapidapi.com/shows/search/title?country=in&title=" +
      movie +
      "&series_granularity=show&show_type=movie&output_language=en";
    const data = await fetch(url, NOW_PLAYING_API_OPTIONS);
    const json = await data.json();
    return json;
  };

  return (
    <div className="pt-[30%] md:pt-[20%] lg:pt-[10%]">
      <form
        className="w-[90%] md:w-1/2 mx-auto bg-black flex flex-col md:flex-row items-center justify-between gap-2 p-4 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        
        <input
          ref={searchText}
          type="text"
          className="w-full flex-1 p-3 mb-2 md:mb-0 bg-white text-black rounded-md"
          placeholder="What would you like to watch today?"
        />

       
        <button
          className="p-3 bg-red-600 text-white rounded-md flex items-center justify-center w-full md:w-auto"
          onClick={handleGptSearchClick}
        >
          <FaSearch size={23} />
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
