import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import Background from "../../assets/bg-img.jpg";

const GPTSearch = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover opacity-80"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-5 -z-10"></div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
