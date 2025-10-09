import React, { useEffect, useState } from 'react';
import AppCard from '../../components/AppCard/AppCard';
import { useNavigate } from 'react-router-dom';

const Apps = () => {
  const [allApps, setAllApps] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/AppData.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load AppData.json');
        return res.json();
      })
      .then(data => setAllApps(data))
      .catch(err => console.error('Error loading apps:', err));
  }, []);

  if (!allApps.length) {
    return <p className="text-center text-gray-500 py-10">Loading apps...</p>;
  }

  const topEightApps = allApps.slice(0, 8);

  return (
    <div className="py-10 px-6 lg:px-20">
      <h1 className="text-3xl font-bold text-center text-[#000000] mb-3">
        Trending Apps
      </h1>

      <p className="text-center text-gray-600 text-sm md:text-base mb-8">
        Explore all trending apps on the market developed by us.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {topEightApps.map(singleApp => (
          <AppCard key={singleApp.id} singleApp={singleApp} />
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate('/all-apps')}
          className="bg-[#632EE3] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4b20b8] transition-all duration-300"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default Apps;
