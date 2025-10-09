import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../../assets/not-found.png';

const AppNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F9FAFB] px-6 text-center">
      <img
        src={notFoundImage}
        alt="Not Found"
        className="w-72 h-72 object-contain mb-6 animate-float"
      />

      {/* 🔹 Text Section */}
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        OOPS!! APP NOT FOUND
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        The app you are requesting is not found on our system. Please try
        another app.
      </p>

      {/* 🔹 Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="bg-gradient-to-r from-[#7C3AED] to-[#9F67FF] text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transform transition-all duration-300"
        >
          Back to Home
        </Link>

        <Link
          to="/apps"
          className="bg-white border-2 border-[#7C3AED] text-[#7C3AED] px-8 py-3 rounded-lg font-semibold hover:bg-[#7C3AED] hover:text-white transition-all duration-300"
        >
          Go to Apps
        </Link>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AppNotFound;
