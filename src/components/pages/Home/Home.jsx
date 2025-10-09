import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Apps from '../Apps/Apps';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // 🔹 Loading Spinner
  if (loading) {
    return (
      <div className="w-screen overflow-x-hidden bg-[#F8F8F8] min-h-screen flex justify-center items-center">
        <div className="w-10 h-10 border-4 border-[#632EE3] border-t-transparent rounded-full animate-spin"></div>
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
