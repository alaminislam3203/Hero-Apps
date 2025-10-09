import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const githubProfile = 'https://github.com/alaminislam3203';

  const navLinkStyle = ({ isActive }) =>
    `
      relative mx-4 font-medium transition-all duration-300 
      ${isActive ? 'text-[#632EE3]' : 'text-gray-700 hover:text-[#632EE3]'}
      after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
      after:w-0 after:h-[2px] after:bg-[#632EE3]
      after:transition-all after:duration-300 hover:after:w-full
      ${isActive ? 'after:w-full' : ''}
    `;

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={navLinkStyle}
        onClick={() => setIsMenuOpen(false)}
      >
        Home
      </NavLink>
      <NavLink
        to="/apps"
        className={navLinkStyle}
        onClick={() => setIsMenuOpen(false)}
      >
        Apps
      </NavLink>
      <NavLink
        to="/installation"
        className={navLinkStyle}
        onClick={() => setIsMenuOpen(false)}
      >
        Installation
      </NavLink>
    </>
  );

  return (
    <div className="w-screen overflow-x-hidden bg-white sticky top-0 z-50 shadow-sm">
      <div className="navbar w-full max-w-[1440px] mx-auto justify-between px-4 lg:px-8">
        <div className="navbar-start">
          {/* Mobile menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-ghost lg:hidden"
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="btn btn-ghost text-xl font-bold flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src={logo}
              alt="HERO.IO logo"
              className="w-8 h-8 object-contain"
            />
            <span className="font-bold text-[#632EE3] tracking-tight">
              HERO.IO
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        {/* GitHub Button */}
        <div className="navbar-end">
          <a
            href={githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="btn flex items-center gap-2 text-white border-none 
               bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] 
               hover:opacity-90"
          >
            <i className="fa-brands fa-github text-lg"></i> Contribute
          </a>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md rounded-b-xl py-4 flex flex-col items-center space-y-3">
          {navLinks}
        </div>
      )}
    </div>
  );
};

export default Navbar;
