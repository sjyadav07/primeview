import React from "react";
import { FaFilm } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col justify-center items-center">
      {/* Spinning Film Reel */}
      <div className="relative w-32 h-32 mb-8">
        <div className="absolute inset-0 border-8 border-t-red-600 border-gray-700 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex justify-center items-center text-red-600 text-4xl animate-pulse">
          <FaFilm />
        </div>
      </div>

      {/* Loading Text */}
      <h1 className="text-white text-3xl md:text-5xl font-extrabold flex space-x-1">
        {["L", "O", "A", "D", "I", "N", "G", ".", ".", "."].map(
          (letter, idx) => (
            <span
              key={idx}
              className="inline-block animate-bounce"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {letter}
            </span>
          )
        )}
      </h1>

      {/* Optional small tagline */}
      <p className="text-gray-400 mt-4 text-center text-sm md:text-lg">
        Fetching the latest movies for you...
      </p>
    </div>
  );
};

export default Loading;
