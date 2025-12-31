import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { FaPlay, FaInfoCircle, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  const movies = useLoaderData();

  const banners = movies.slice(0, 6); // Hero banners
  const trendingMovies = movies.slice(3, 11); // Trending movies

  return (
    <div className="w-full bg-black text-white pt-20 pb-6">
      {/* -------------------- HERO SLIDER -------------------- */}
      <section className="relative w-full h-[70vh] md:h-[85vh] ">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="w-full h-full"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id} className="relative">
              <img
                src={banner.movie_banner}
                alt={banner.title}
                className="w-full h-full object-cover brightness-75"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/10"></div>

              <div className="absolute left-6 md:left-16 bottom-16 md:bottom-24 max-w-xl space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold">
                  {banner.title}
                </h1>
                <p className="text-gray-300 line-clamp-4">
                  {banner.description}
                </p>
                <div className="flex gap-4 mt-4">
                  <NavLink
                    to={`/movies/${banner.id}`}
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-5 py-3 rounded font-semibold transition"
                  >
                    <FaPlay /> Watch Now
                  </NavLink>
                  <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-5 py-3 rounded font-semibold backdrop-blur-sm transition">
                    <FaInfoCircle /> More Info
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* -------------------- TRENDING MOVIES -------------------- */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Trending Movies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {trendingMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer shadow-[inset_0_30px_60px_-12px_rgba(120,120,255,0.25),inset_0_18px_36px_-18px_rgba(0,0,0,0.9)] hover:scale-105 transition-all duration-300 hover:shadow-[inset_0_30px_60px_-12px_rgba(150,150,255,0.35),0_25px_60px_rgba(0,0,0,0.9)]"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-60 object-cover"
              />
              <div className="flex items-center gap-2 p-3">
                <FaStar className="text-yellow-400" />
                <p className="font-semibold">
                  {(Math.random() * 5 + 5).toFixed(1)}
                </p>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-lg truncate">
                  {movie.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------- CTA SECTION -------------------- */}
      <section className="bg-gray-900 py-16 px-4 md:px-6 ">
        <div className="max-w-4xl mx-auto text-center space-y-4 ">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Join PrimeView Today!
          </h3>
          <p className="text-gray-300 text-lg">
            Get personalized recommendations, watch trailers, read reviews, and
            explore the world of entertainment.
          </p>
          <button className="mt-6 bg-red-600 hover:bg-red-700 px-8 py-3 rounded text-lg font-semibold transition">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
