import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import appsData from '../../../AppData.json';

const TopApps = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const visibleApps = showAll ? appsData : appsData.slice(0, 8);

  return (
    <section className="w-screen overflow-x-hidden bg-[#F8F8F8] py-16 px-6 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#632EE3] mb-2">
          Top Apps
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Explore the most downloaded and highest-rated apps this month.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {visibleApps.map(app => (
          <div
            key={app.id}
            onClick={() => navigate(`/appDetails/${app.id}`)}
            className="bg-white rounded-xl shadow-md hover:shadow-lg cursor-pointer transition-all duration-300 p-5 flex flex-col items-center text-center border border-gray-100"
          >
            <img
              src={app.image}
              alt={app.title}
              className="w-24 h-24 object-contain mb-4"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold mb-1">{app.title}</h3>
            <p className="text-gray-500 text-sm mb-2">
              {app.developer || app.companyName}
            </p>

            <div className="flex items-center justify-center gap-3 text-gray-600 text-sm">
              <span>⭐ {app.rating || app.ratingAvg}</span>
              <span>•</span>
              <span>{app.downloads?.toLocaleString() || 0}+ Downloads</span>
            </div>
          </div>
        ))}
      </div>
      {/* Show All Button */}
      {!showAll && appsData.length > 8 && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
          >
            Show All
          </button>
        </div>
      )}
    </section>
  );
};

export default TopApps;
