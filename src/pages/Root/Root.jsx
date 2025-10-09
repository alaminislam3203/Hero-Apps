import React, { useEffect } from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const Root = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
