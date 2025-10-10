import React, { useEffect, useState } from 'react';
import { getStoredApps } from '../../utility/localStorage';
import Swal from 'sweetalert2';
import downloadsIcon from '../../assets/icon-downloads.png';
import ratingsIcon from '../../assets/icon-ratings.png';

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState('high');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      fetch('/AppData.json')
        .then(res => res.json())
        .then(data => {
          const storedIds = getStoredApps();
          const filtered = data.filter(app => storedIds.includes(app.id));
          setInstalledApps(filtered);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error loading apps:', err);
          setLoading(false);
        });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // 🔹 Uninstall Logic
  const handleUninstall = (id, title) => {
    Swal.fire({
      title: `Uninstall ${title}?`,
      text: 'Are you sure you want to Uninstall this app?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00D390',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Uninstall it!',
      background: '#fff',
      color: '#333',
      reverseButtons: true,
    }).then(result => {
      if (result.isConfirmed) {
        const updated = installedApps.filter(app => app.id !== id);
        setInstalledApps(updated);
        localStorage.setItem(
          'favoriteList',
          JSON.stringify(updated.map(a => a.id))
        );

        // ✅ Professional Gradient SweetAlert for Uninstall
        Swal.fire({
          icon: 'warning',
          title: '🗑️ Uninstalled Successfully!',
          html: `<p style="font-size: 16px; font-weight: 500; color: #f0f0f0;">
           <b>${title}</b> has been removed from your installation list.
         </p>`,
          background: 'linear-gradient(135deg, #632EE3, #9F62F2)',
          color: '#fff',
          timer: 2000,
          showConfirmButton: false,
          buttonsStyling: false,
          customClass: {
            popup: 'rounded-2xl shadow-2xl p-6',
            title: 'font-bold text-2xl mb-2',
            htmlContainer: 'text-gray-100',
          },
        });
      }
    });
  };

  // 🔹 Download Number Formatter
  const formatDownloads = num => {
    if (num >= 1000000000)
      return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    if (num >= 1000000)
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    return num;
  };

  const sortedApps = [...installedApps].sort((a, b) =>
    sortOrder === 'high' ? b.downloads - a.downloads : a.downloads - b.downloads
  );

  return (
    <div className="w-full bg-[#F8F8F8] min-h-screen py-10 px-4 sm:px-8 lg:px-16">
      {/* ---------- Header ---------- */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-[#000] mb-2">
          Your Installed Apps
        </h1>
        <p className="text-gray-600 mb-6">
          Explore All Trending Apps on the Market developed by us.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <p className="text-gray-800 font-semibold mb-4 md:mb-0">
            ({installedApps.length}) Apps Found
          </p>

          <select
            className="border border-gray-300 rounded-lg px-4 py-2"
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value="" disabled>
              Sort By Size
            </option>
            <option value="high">High-Low</option>
            <option value="low">Low-High</option>
          </select>
        </div>
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
            Loading Installed Apps...
          </p>
        </div>
      ) : installedApps.length > 0 ? (
        <div className="flex flex-col gap-4">
          {sortedApps.map(app => (
            <div
              key={app.id}
              className="w-full bg-white p-4 rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between hover:shadow-md transition-all duration-200"
            >
              {/* Left: Image */}
              <div className="flex-shrink-0 mb-4 sm:mb-0">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-24 h-24 object-contain"
                />
              </div>

              {/* Middle: Info */}
              <div className="flex-1 sm:ml-6 text-center sm:text-left">
                <h3 className="font-bold text-xl mb-2">{app.title}</h3>
                <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <img
                      src={downloadsIcon}
                      alt="downloads"
                      className="w-5 h-5"
                    />
                    <span className="text-[#00D390] font-semibold">
                      {formatDownloads(app.downloads)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={ratingsIcon} alt="rating" className="w-5 h-5" />
                    <span>{app.ratingAvg}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{app.size} MB</span>
                  </div>
                </div>
              </div>

              {/* Right: Button */}
              <div className="mt-4 sm:mt-0 sm:ml-auto">
                <button
                  onClick={() => handleUninstall(app.id, app.title)}
                  className="px-6 py-2 rounded-lg bg-[#00D390] text-white font-semibold hover:bg-[#00b87b] transition"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-xl py-20">
          No Installed Apps Found
        </p>
      )}
    </div>
  );
};

export default Installation;
