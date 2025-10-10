import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Apps from '../Apps/Apps';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // 🔹 Professional Loading Spinner
  if (loading) {
    return (
      <div className="w-screen overflow-x-hidden bg-gradient-to-br from-[#f6f4ff] to-[#f0ebff] min-h-screen flex flex-col justify-center items-center">
        <div className="relative">
          {/* Outer gradient ring */}
          <div className="w-16 h-16 border-[6px] border-transparent border-t-[#632EE3] border-r-[#9F62F2] rounded-full animate-spin shadow-lg"></div>

          {/* Inner glow circle */}
          <div className="absolute inset-2 bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] opacity-20 rounded-full blur-sm"></div>
        </div>

        {/* Loading Text */}
        <p className="mt-6 text-lg font-semibold text-[#632EE3] animate-pulse tracking-wide">
          Loading HERO.IO...
        </p>
      </div>
    );
  }

  // 🔹 Main Content
  return (
    <div className="w-screen overflow-x-hidden">
      <Banner />
      <Apps />
    </div>
  );
};

export default Home;
