import React from "react";
import { FaSearch } from "react-icons/fa";

const GPTSearchBar = () => {
  return (
    <div className="pt-[8%]">
      <form action="" className="w-1/2 mx-auto bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-3 m-4 col-span-10"
          placeholder="What would you like to watch today?"
        />
        <button className="p-2 m-4 col-span-2 bg-red-600 text-white rounded-md flex items-center justify-center">
          <FaSearch size={23} />
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
