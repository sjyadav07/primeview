import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <NavLink to="/home" className="text-3xl font-bold text-red-600">
          PrimeView
        </NavLink>

        {/* Desktop Nav */}
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-200 text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <nav className="flex flex-col gap-6 px-6 py-6 text-gray-200 font-medium">
            <NavLink
              to="/home"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-red-600" : "hover:text-red-500 transition"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-red-600" : "hover:text-red-500 transition"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/movies"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-red-600" : "hover:text-red-500 transition"
              }
            >
              Movies
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-red-600" : "hover:text-red-500 transition"
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
