import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-amber-400 px-6 py-2 text-white md:px-12">

      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/logo.png"
            alt="Recipe Finder Logo"
            className="h-16 w-16 rounded-full object-cover"
          />

          <h1 className="text-2xl font-bold">
            Recipe Finder
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-orange-600"
                : "hover:text-orange-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-orange-600"
                : "hover:text-orange-600"
            }
          >
            Favourites
          </NavLink>

          <span className="text-2xl">
            ♥
          </span>

        </div>

        {/* Hamburger Button - Mobile Only */}
        <button
          className="cursor-pointer text-3xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center gap-4 py-4 md:hidden">

          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>

     

          <NavLink
            to="/favourites"
            onClick={() => setIsOpen(false)}
          >
            Favourites
          </NavLink>

        </div>
      )}

    </nav>
  );
}

export default Navbar;