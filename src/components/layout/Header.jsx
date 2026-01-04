import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ search, setSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <NavLink to="/home" className="text-3xl font-bold text-red-600">
          PrimeView
        </NavLink>

        <nav className="hidden md:flex items-center gap-6 font-medium text-gray-200">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "text-red-600" : "hover:text-red-500 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-red-600" : "hover:text-red-500 transition"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? "text-red-600" : "hover:text-red-500 transition"
            }
          >
            Movies
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-red-600" : "hover:text-red-500 transition"
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <input
            type="text"
            placeholder="Search the anime..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white py-2 px-5 rounded outline-none border-b-2 border-red-600"
          />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-200 text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 py-6">
          <input
            type="text"
            placeholder="Search the anime..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mb-4 bg-white py-2 px-5 rounded outline-none border-b-2 border-red-600"
          />

          <nav className="flex flex-col gap-6 text-gray-200 font-medium">
            <NavLink to="/home" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/movies" onClick={() => setMenuOpen(false)}>
              Movies
            </NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
