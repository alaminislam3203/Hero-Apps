import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredApps } from '../../utility/localStorage';
import AppCard from '../../components/AppCard/AppCard';

const FavoriteList = () => {
  const allApps = useLoaderData();
  const [favoriteApps, setFavoriteApps] = useState([]);

  useEffect(() => {
    const storedAppIds = getStoredApps();
    const filtered = allApps.filter(app => storedAppIds.includes(app.id));
    setFavoriteApps(filtered);
  }, [allApps]);

  if (favoriteApps.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-600">
          No apps Install yet
        </h2>
        <p className="text-gray-500 mt-2">
          Browse apps and add some to your Installed list!
        </p>
      </div>
    );
  }

  return (
    <div className="py-12 px-6 lg:px-20">
      <h1 className="text-3xl font-bold text-[#632EE3] text-center mb-10">
        My Favorite Apps
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {favoriteApps.map(app => (
          <AppCard key={app.id} singleApp={app} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteList;
