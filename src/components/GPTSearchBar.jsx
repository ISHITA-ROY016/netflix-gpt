import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { NOW_PLAYING_API_OPTIONS } from "../utils/constants";
import openai from "../utils/openai";
import { useDispatch } from "react-redux";
import { addGptMovieResults } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    //make an api call to openAi and get movie results

    const gptQuery = `You are a Movie Recommendation system. Based on the query, provide a list of exactly 5 movie titles that match the query "${searchText.current.value}".
  
  If the query is a specific movie name like "${searchText.current.value}", return all movies that match exactly with that name. If the query is more general (e.g., genre-based like "Indian comedy movies"), list exactly 5 relevant movie names.
  
  If there are many matching movies, just pick any 5. If there are fewer than 5, fill in with other popular or closely related movies until there are exactly 5. 
  
  Only output the names of the movies in a single line, comma-separated, and without any extra text or formatting, and no other names, or explanations..
  
  Examples:
  - Query: "Don" → Output: Don, Don 2, The Don, Baazigar, Sholay
  - Query: "Indian comedy movies" → Output: Hera Pheri, 3 Idiots, Dhamaal, Golmaal, Chup Chup Ke
  
  Query: "${searchText.current.value}"`;

    const completion = await openai.chat.completions.create({
      model: "microsoft/phi-3-medium-128k-instruct:free",
      messages: [
        {
          role: "user",
          content: gptQuery,
        },
      ],
    });
    console.log(completion.choices[0].message.content);
    const getMovies = completion.choices[0].message.content.split(/,\s*/);
    console.log(getMovies);
    const movieArr = getMovies.map((movie) => fetchMovieDetails(movie)); // it will return a promise array

    // reads array of promises and resolves them into json output
    const movieResults = await Promise.all(movieArr);
    // Filter each element to have a max of 6 objects
    const limitedMovieResults = movieResults.map((movieArray) =>
      movieArray.slice(0, 6)
    );
    console.log(limitedMovieResults);

    dispatch(addGptMovieResults(limitedMovieResults));
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
    <div className="pt-[8%]">
      <form
        className="w-1/2 mx-auto bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-3 m-4 col-span-10"
          placeholder="What would you like to watch today?"
        />
        <button
          className="p-2 m-4 col-span-2 bg-red-600 text-white rounded-md flex items-center justify-center"
          onClick={handleGptSearchClick}
        >
          <FaSearch size={23} />
        </button>
        3
      </form>
    </div>
  );
};

export default GPTSearchBar;
