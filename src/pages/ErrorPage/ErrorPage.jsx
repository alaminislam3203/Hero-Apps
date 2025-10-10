import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import PageNotFoundImage from '../../assets/page-not-found.png';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F9FAFB] px-6 text-center">
      <img
        src={PageNotFoundImage}
        alt="Error Illustration"
        className="w-72 h-72 object-contain mb-6 animate-float"
      />

      {/* 🔹 Error Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Oops!! Page Not Found
      </h2>

      {/* 🔹 Error Description */}
      <p className="text-gray-600 mb-8 max-w-md">
        The page you are looking for is not available.
      </p>

      {/* 🔹 Back Button */}
      <Link
        to="/"
        className="bg-gradient-to-r from-[#7C3AED] to-[#9F67FF] text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transform transition-all duration-300"
      >
        Back to Home
      </Link>

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

export default ErrorPage;
