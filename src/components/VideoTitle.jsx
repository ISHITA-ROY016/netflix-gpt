import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[16%] px-6 md:px-12 absolute text-white bg-gradient-to-b from-black via-black/50 to-transparent">
      <h1 className="pt-20 sm:pt-16 md:pt-10 lg:pt-0 text-3xl sm:text-4xl md:text-5xl font-bold">
        {title}
      </h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
      <div className="flex flex-col gap-4 sm:flex-row pt-10 md:pt-0">
        <button className="flex justify-center items-center w-[30%] md:w-auto py-3 px-2 md:px-12 mr-6 bg-white text-black rounded-md text-lg hover:bg-green-400 hover:bg-opacity-50 transition-colors duration-200 ease-in-out border border-transparent hover:border-solid hover:border-white active:bg-green-600">
          <FaPlay className="mr-1" /> Play
        </button>
        <button className="flex justify-center items-center w-[40%] md:w-auto py-3 px-2 md:px-12 bg-gray-300 rounded-md text-lg bg-opacity-55 hover:bg-gray-500 border border-transparent hover:border-solid hover:border-white active:bg-gray-600">
          <FaInfoCircle className="mr-1" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
