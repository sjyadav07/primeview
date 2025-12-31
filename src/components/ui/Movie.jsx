import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Movie = () => {
  const apiData = useLoaderData();

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4 md:px-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12 mt-6">
        Movies Collection
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {apiData.map((movie) => (
          <Card key={movie.id} currMovie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default Movie;
