import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaStar, FaCalendarAlt, FaClock } from "react-icons/fa";

const MovieDetails = () => {
  const movie = useLoaderData();
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gray-900 text-gray-300 px-4 py-10 md:py-16">
      <div className="max-w-6xl mx-auto shadow-lg rounded-2xl overflow-hidden bg-gray-800 my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-6 md:p-10">
          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src={movie.image}
              alt={movie.title}
              className="rounded-xl shadow-md w-full max-w-sm object-cover hover:scale-105 transition-transform duration-300"
              onError={(e) =>
                (e.target.src = "https://www.ghibli.jp/images/aya.jpg")
              }
            />
          </div>

          {/* DETAILS */}
          <div className="flex flex-col gap-4">
            {/* BADGES */}
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-1 bg-red-600 text-white font-semibold px-3 py-1 rounded-full text-sm">
                <FaCalendarAlt /> {movie.release_date}
              </span>
              <span className="flex items-center gap-1 bg-yellow-500 text-white font-semibold px-3 py-1 rounded-full text-sm">
                <FaStar /> {movie.rt_score}
              </span>
              <span className="flex items-center gap-1 bg-purple-600 text-white font-semibold px-3 py-1 rounded-full text-sm">
                <FaClock /> {movie.running_time} min
              </span>
            </div>

            {/* TITLES */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">
              {movie.title}
            </h1>
            <h2 className="text-lg md:text-xl text-gray-400 italic">
              {movie.original_title}
            </h2>

            {/* INFO */}
            <div className="text-gray-300 space-y-1 text-md">
              <p>
                <span className="font-semibold text-white">Director:</span>{" "}
                {movie.director}
              </p>
              <p>
                <span className="font-semibold text-white">Producer:</span>{" "}
                {movie.producer}
              </p>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-300 leading-relaxed mt-2 md:mt-4">
              {movie.description}
            </p>

            {/* BUTTON */}
            <button
              onClick={() => navigate(-1)}
              className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold cursor-pointer text-lg px-6 py-3 rounded-lg transition-all shadow-md"
            >
              ⬅ Back to Movies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
