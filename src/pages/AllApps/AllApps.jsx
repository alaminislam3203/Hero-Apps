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
    }, 300);

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
      {/* ---------- Header Section ---------- */}
      <h1 className="text-3xl font-bold text-center text-[#000000] mb-3">
        Our All Applications
      </h1>

      <p className="text-center text-gray-600 text-sm md:text-base mb-8">
        Explore All Apps on the Market developed by us. We code for Millions.
      </p>

      {/* ---------- Search + Count ---------- */}
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

      {/* ---------- Loader ---------- */}
      {loading ? (
        <div className="w-full min-h-[50vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#f6f4ff] to-[#f0ebff] rounded-2xl shadow-inner">
          <div className="relative">
            {/* Outer Gradient Ring */}
            <div className="w-16 h-16 border-[6px] border-transparent border-t-[#632EE3] border-r-[#9F62F2] rounded-full animate-spin shadow-lg"></div>

            {/* Inner Glow */}
            <div className="absolute inset-2 bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] opacity-20 rounded-full blur-sm"></div>
          </div>
          <p className="mt-6 text-lg font-semibold text-[#632EE3] animate-pulse tracking-wide">
            Loading All Apps...
          </p>
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
