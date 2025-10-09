import React, { useEffect, useState } from 'react';
import AppCard from '../../components/AppCard/AppCard';

const AllApps = () => {
  const [allApps, setAllApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      fetch('/AppData.json')
        .then(res => res.json())
        .then(data => {
          setAllApps(data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error loading apps:', err);
          setLoading(false);
        });
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = e => {
    const value = e.target.value;
    setSearchTerm(value);
    setLoading(true);
    setTimeout(() => setLoading(false), 200);
  };

  const filteredApps = allApps.filter(app =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden bg-[#F8F8F8] py-10 px-6 lg:px-20">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-center text-[#000000] mb-3">
        Our All Applications
      </h1>

      <p className="text-center text-gray-600 text-sm md:text-base mb-8">
        Explore All Apps on the Market developed by us. We code for Millions.
      </p>

      {/* Search + Count */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between mb-8 gap-4 overflow-x-hidden">
        <p className="text-gray-700 font-medium whitespace-nowrap">
          ({filteredApps.length}) Apps Found
        </p>

        <input
          type="text"
          placeholder="Search Apps"
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-80"
        />
      </div>

      {/* Loader */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-14 h-14 border-4 border-[#632EE3] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600 font-medium">Loading apps...</p>
        </div>
      ) : filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[100vw] overflow-x-hidden">
          {filteredApps.map(app => (
            <AppCard key={app.id} singleApp={app} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-2xl font-semibold py-10">
          No apps found.
        </p>
      )}
    </div>
  );
};

export default AllApps;
