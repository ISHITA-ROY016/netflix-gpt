import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import Background from "../assets/bg-img.jpg";

const GPTSearch = () => {
  return (
    <div>
      <img src={Background} alt="" className="object-cover w-screen h-screen absolute -z-10 opacity-90" />
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
