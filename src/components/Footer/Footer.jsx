import React from 'react';
import { Link } from 'react-router-dom';
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="w-screen overflow-x-hidden bg-[#001931] text-white py-10 border-t border-gray-200">
      {/* 🔹 Flex container for equal spacing */}
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between gap-10 md:gap-20 text-center md:text-left">
        {/* Brand Section */}
        <div className="space-y-4 flex-1 min-w-[200px]">
          <Link
            to="/"
            className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2"
          >
            <img
              src={logo}
              alt="HERO.IO logo"
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <span className="text-xl md:text-2xl font-extrabold text-white">
              HERO.IO
            </span>
          </Link>
          <p className="text-xs md:text-sm leading-relaxed text-white max-w-[240px] mx-auto md:mx-0">
            Discover the best apps, track downloads, and find new tools for your
            digital world — all in one place.
          </p>
        </div>

        {/* Company */}
        <div className="flex-1 min-w-[160px]">
          <h6 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">
            Company
          </h6>
          <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
            <li>
              <Link to="/about" className="hover:text-[#FFFF00]">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#FFFF00]">
                Contact
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-[#FFFF00]">
                Careers
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-[#FFFF00]">
                Press
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="flex-1 min-w-[160px]">
          <h6 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">
            Legal
          </h6>
          <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
            <li>
              <Link to="#" className="hover:text-[#FFFF00]">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-[#FFFF00]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-[#FFFF00]">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center w-full md:w-auto">
          <h6 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">
            Social Links
          </h6>
          <div className="flex items-center justify-center gap-4 md:gap-5">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white text-black hover:bg-[#00acee] hover:text-white transition-all duration-300"
            >
              <FaXTwitter className="text-sm md:text-lg" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white text-black hover:bg-[#0077b5] hover:text-white transition-all duration-300"
            >
              <FaLinkedinIn className="text-sm md:text-lg" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white text-black hover:bg-[#1877f2] hover:text-white transition-all duration-300"
            >
              <FaFacebookF className="text-sm md:text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-[#627382] w-full flex items-center justify-center py-5 mt-10 mb-0">
        <p className="text-center text-xs md:text-sm text-[#FAFAFA]">
          Copyright © 2025 - All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
