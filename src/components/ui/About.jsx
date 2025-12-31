import React from "react";
import { motion } from "framer-motion";
import { FaFilm, FaUsers, FaStar } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full bg-black text-white pt-20">
      {/* -------------------- HERO SECTION -------------------- */}
      <section className="relative w-full h-[60vh] flex justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
          alt="cinema"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold">About PrimeView</h1>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto text-lg">
            Explore movies, shows, and a world of entertainment with the best
            recommendations and reviews.
          </p>
          <button className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-semibold text-lg transition">
            Get Started
          </button>
        </motion.div>
      </section>

      {/* -------------------- OUR STORY -------------------- */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 flex flex-col md:flex-row gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
          alt="cinema"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
        />
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-red-600">Our Story</h2>
          <p className="text-gray-300 leading-relaxed">
            PrimeView is your ultimate movie and TV shows hub. From timeless
            classics to the latest blockbusters, we provide personalized
            recommendations, trailers, and reviews to make your streaming
            experience unforgettable.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our mission is to connect movie enthusiasts with the content they
            love, giving them a platform to explore, rate, and discuss their
            favorite films.
          </p>
        </div>
      </section>

      {/* -------------------- FEATURES -------------------- */}
      <section className="bg-gray-900 py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Choose PrimeView?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-black p-6 rounded-lg shadow hover:shadow-xl transition cursor-pointer"
            >
              <FaFilm className="text-red-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Huge Collection</h3>
              <p className="text-gray-300">
                Explore thousands of movies and shows from around the world.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-black p-6 rounded-lg shadow hover:shadow-xl transition cursor-pointer"
            >
              <FaStar className="text-yellow-400 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Expert Reviews</h3>
              <p className="text-gray-300">
                Read reviews and ratings to pick the best movies to watch.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-black p-6 rounded-lg shadow hover:shadow-xl transition cursor-pointer"
            >
              <FaUsers className="text-blue-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-300">
                Connect with fellow movie lovers and discuss your favorites.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* -------------------- CTA SECTION -------------------- */}
      <section className="py-16 px-4 md:px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Join PrimeView Today!
        </h3>
        <p className="text-gray-300 mb-6 text-lg">
          Get personalized recommendations, watch trailers, and explore the
          world of movies like never before.
        </p>
        <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded text-lg font-semibold transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default About;
