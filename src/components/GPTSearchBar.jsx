import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { NOW_PLAYING_API_OPTIONS } from "../utils/constants";
import openai from "../utils/openai";

const GPTSearchBar = () => {
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    //make an api call to openAi and get movie results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". Only give me name of exactly 5 comma separated movies. For examples; Don, Sholay, Gadar, Stree 2, Koi Mil Gaya. If the query is any movie name like bhool bhulaiyaa give me all the movies that matches exactly the movie name. For example for query bhool bhulaiyaa the results will be; bhool bhulaiyaa, bhool bhulaiyaa 2, bhool bhulaiyaa 3";

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
    // Filter each element to have a max of 5 objects
    const limitedMovieResults = movieResults.map((movieArray) =>
      movieArray.slice(0, 6)
    );

    // Now, limitedMovieResults will contain arrays with a max of 5 objects each
    console.log(limitedMovieResults);
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
