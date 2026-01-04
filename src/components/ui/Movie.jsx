import React from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import Card from "./Card";

const Movie = () => {
  const apiData = useLoaderData();
  const { search } = useOutletContext();

  const filteredMovies = apiData.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4 md:px-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12 mt-6">
        Movies Collection
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Card key={movie.id} currMovie={movie} />
          ))
        ) : (
          <p className="text-gray-400 text-xl text-center col-span-full">
            No movies found
          </p>
        )}
      </ul>
    </div>
  );
};

export default Movie;
