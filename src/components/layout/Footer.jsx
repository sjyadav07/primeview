import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-red-600">
            <NavLink to="/home">PrimeView</NavLink>
          </h2>
          <p className="text-gray-400">
            Your ultimate source for movies, reviews, and entertainment updates.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2 flex flex-col sm:flex-row sm:justify-between gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <NavLink
                  to="/home"
                  className="hover:text-red-600 transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="hover:text-red-600 transition-colors"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies"
                  className="hover:text-red-600 transition-colors"
                >
                  Movies
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-red-600 transition-colors"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-red-600 transition-colors text-lg"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="hover:text-red-600 transition-colors text-lg"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:text-red-600 transition-colors text-lg"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="hover:text-red-600 transition-colors text-lg"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} PrimeView. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
