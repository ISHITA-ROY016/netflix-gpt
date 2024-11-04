import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className="py-3 px-12 mr-6 bg-gray-300 rounded-md text-lg bg-opacity-45">▶️ Play </button>
        <button className="py-3 px-12 bg-gray-300 rounded-md text-lg bg-opacity-45">ℹ More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
