import React from "react";
import { NavLink } from "react-router-dom";
import { FaStar, FaPlay } from "react-icons/fa";

const fallbackImage = "https://www.ghibli.jp/images/aya.jpg";

const Card = ({ currMovie }) => {
  const { image, title, description, release_date, rt_score, id } = currMovie;
  const finalImg = image || fallbackImage;

  return (
    <li className="bg-gray-800 rounded-md overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col">
      {/* Image */}
      <div className="relative w-full aspect-3/4">
        <img
          src={finalImg}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => (e.target.src = fallbackImage)}
        />
        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-yellow-500 text-black font-semibold text-sm px-2 py-1 rounded-lg shadow-lg flex items-center gap-1">
          <FaStar /> {rt_score}
        </div>
      </div>

      {/* Info Section */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-lg font-bold text-white truncate">{title}</h1>
          <p className="text-gray-300 text-sm line-clamp-3 mt-2">
            {description}
          </p>
          <span className="text-gray-400 text-sm mt-2 block">
            📅 {release_date}
          </span>
        </div>

        {/* Watch Button */}
        <NavLink to={`${id}`}>
          <button className="mt-4 w-full py-3 cursor-pointer bg-red-600 hover:bg-red-700 text-white font-semibold rounded flex items-center justify-center gap-2 transition-all">
            <FaPlay /> Watch Now
          </button>
        </NavLink>
      </div>
    </li>
  );
};

export default Card;
