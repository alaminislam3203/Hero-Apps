import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from 'recharts';
import 'react-toastify/dist/ReactToastify.css';

import AppNotFound from '../AppNotFound/AppNotFound';
import downloadsIcon from '../../assets/icon-downloads.png';
import ratingsIcon from '../../assets/icon-ratings.png';
import reviewsIcon from '../../assets/icon-review.png';
import { addToStoredDB, getStoredApps } from '../../utility/localStorage';

const AppDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [loading, setLoading] = useState(true);
  const [installed, setInstalled] = useState(false);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const appId = parseInt(id, 10);
  if (isNaN(appId)) return <AppNotFound />;

  const singleApp = data?.find(app => app.id === appId);
  if (!singleApp) return <AppNotFound />;

  const { title, image, downloads, reviews, description, size } =
    singleApp || {};

  useEffect(() => {
    const storedApps = getStoredApps();
    if (storedApps.includes(appId)) setInstalled(true);
  }, [appId]);

  const handleInstall = () => {
    if (!installed) {
      addToStoredDB(appId, title);
      setInstalled(true);
    }
  };

  const formatDownloads = num => {
    if (num >= 1000000000)
      return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    else if (num >= 1000000)
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    else if (num >= 1000)
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    return num;
  };

  // ---------- Loader Section ----------
  if (loading) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#f6f4ff] to-[#f0ebff] overflow-hidden">
        <div className="relative">
          {/* Outer Gradient Ring */}
          <div className="w-16 h-16 border-[6px] border-transparent border-t-[#632EE3] border-r-[#9F62F2] rounded-full animate-spin shadow-lg"></div>

          {/* Inner Glow */}
          <div className="absolute inset-2 bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] opacity-25 rounded-full blur-sm"></div>
        </div>
        <p className="mt-6 text-lg font-semibold text-[#632EE3] animate-pulse tracking-wide">
          Loading App Details...
        </p>
      </div>
    );
  }

  // ---------- Main Section ----------
  return (
    <section className="w-full max-w-[100vw] overflow-x-hidden bg-[#F8F8F8] py-12 px-6 lg:px-20">
      {/* -------- App Info Section -------- */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        <div className="bg-white shadow-md rounded-lg p-10 flex-shrink-0 flex flex-col justify-center items-center h-[330px] w-[300px]">
          <img
            src={image}
            alt={title}
            className="w-48 h-48 object-contain"
            loading="lazy"
          />
        </div>

        <div className="flex-1 text-center lg:text-left space-y-3">
          <h2 className="text-4xl font-bold text-[#001931]">{title}</h2>

          <p className="text-gray-500 text-base lg:text-lg mb-6">
            Developed by{' '}
            <span className="font-semibold text-[#632EE3] text-lg lg:text-xl">
              {singleApp?.companyName}
            </span>
          </p>

          <div className="w-full h-[1px] bg-[#001931] opacity-20 my-4"></div>

          {/* 🔹 Stats Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-10 mt-4">
            <div className="flex flex-col items-center">
              <img
                src={downloadsIcon}
                alt="Downloads"
                className="w-10 h-10 mb-2"
              />
              <p className="text-gray-500 text-sm">Downloads</p>
              <h3 className="text-2xl font-extrabold text-[#001931] mt-1">
                {formatDownloads(downloads)}
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <img src={ratingsIcon} alt="Rating" className="w-10 h-10 mb-2" />
              <p className="text-gray-500 text-sm">Average Rating</p>
              <h3 className="text-2xl font-extrabold text-[#001931] mt-1">
                {singleApp?.ratingAvg
                  ? Math.min(parseFloat(singleApp.ratingAvg).toFixed(1), 5.0)
                  : '0.0'}
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <img src={reviewsIcon} alt="Reviews" className="w-10 h-10 mb-2" />
              <p className="text-gray-500 text-sm">Total Reviews</p>
              <h3 className="text-2xl font-extrabold text-[#001931] mt-1">
                {reviews
                  ? reviews >= 1000
                    ? `${(reviews / 1000).toFixed(1)}K`
                    : reviews
                  : '0K'}
              </h3>
            </div>
          </div>

          {/* ✅ Install Button */}
          <div className="mt-8 flex items-center justify-center lg:justify-start">
            <button
              onClick={handleInstall}
              disabled={installed}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                installed
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  : 'bg-[#00D390] hover:bg-[#4b20b8] text-white'
              }`}
            >
              {installed
                ? 'Installed'
                : `Install Now ${size ? `(${size} MB)` : ''}`}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#001931] opacity-10 my-10"></div>

      {/* -------- Rating Chart Section -------- */}
      <div className="mt-12 w-full">
        <h3 className="text-2xl font-bold text-[#000000] mb-6 text-center lg:text-left">
          Ratings
        </h3>

        <div className="w-full h-[250px] sm:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={singleApp?.ratings || []}
              layout="vertical"
              margin={{
                top: 10,
                right: 10,
                left: window.innerWidth < 640 ? 20 : 40,
                bottom: 5,
              }}
              barSize={window.innerWidth < 640 ? 14 : 20}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                type="number"
                tick={{ fontSize: window.innerWidth < 640 ? 10 : 12 }}
              />
              <YAxis
                dataKey="name"
                type="category"
                tick={{
                  fontSize: window.innerWidth < 640 ? 11 : 14,
                  fill: '#111827',
                }}
                width={window.innerWidth < 640 ? 60 : 80}
              />
              <Tooltip
                formatter={value => `${value.toLocaleString()} users`}
                contentStyle={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  fontSize: window.innerWidth < 640 ? '12px' : '14px',
                }}
              />
              <Bar dataKey="count" radius={[4, 4, 4, 4]}>
                {(singleApp?.ratings || []).map((entry, index) => {
                  const colors = [
                    '#E53935',
                    '#FB8C00',
                    '#FDD835',
                    '#43A047',
                    '#1E88E5',
                  ];
                  return <Cell key={`cell-${index}`} fill={colors[index]} />;
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#001931] opacity-10 my-10"></div>

      {/* -------- Description Section -------- */}
      <div className="mt-12 w-full">
        <h3 className="text-2xl font-bold text-[#000000] mb-4 text-center lg:text-left">
          Description
        </h3>
        {description
          ?.split(' ')
          .reduce((acc, word, index) => {
            if (index % 95 === 0) acc.push([]);
            acc[acc.length - 1].push(word);
            return acc;
          }, [])
          .map((chunk, i) => (
            <p
              key={i}
              className="text-gray-700 leading-relaxed whitespace-pre-line mb-6"
            >
              {chunk.join(' ')}
            </p>
          ))}
      </div>

      <ToastContainer position="bottom-right" autoClose={2000} />
    </section>
  );
};

export default AppDetails;
