import React from 'react';
import downloadsIcon from '../../assets/icon-downloads.png';
import ratingsIcon from '../../assets/icon-ratings.png';

const AppCard = ({ singleApp }) => {
  const { id, title, image, downloads, ratingAvg } = singleApp;

  return (
    <div
      onClick={() => (window.location.href = `/appDetails/${id}`)}
      className="w-full sm:w-[240px] md:w-[260px] lg:w-[280px] xl:w-[300px]
             bg-white rounded-2xl shadow-md hover:shadow-xl 
             transition-all duration-300 p-5 flex flex-col items-center cursor-pointer 
             overflow-hidden"
    >
      {/* -------- App Image -------- */}
      <img
        src={image}
        alt={title}
        className="w-40 h-40 object-contain rounded-md mb-5 select-none"
        loading="lazy"
      />

      {/* -------- App Name -------- */}
      <h3 className="text-lg font-semibold text-[#002B5B] mb-6 text-center w-full leading-snug">
        {title}
      </h3>

      {/* -------- Downloads & Ratings Buttons -------- */}
      <div className="flex items-center justify-between w-full gap-4">
        {/* Left: Downloads */}
        <div
          className="flex items-center justify-center gap-2 bg-[#F1F5E8] text-[#00D390] text-base font-medium 
             px-4 py-2 rounded-lg w-1/2"
        >
          <img
            src={downloadsIcon}
            alt="Downloads Icon"
            className="w-5 h-5 object-contain"
          />
          <span>
            {downloads
              ? downloads >= 1000000000
                ? `${(downloads / 1000000000).toFixed(1).replace(/\.0$/, '')}B`
                : `${(downloads / 1000000).toFixed(1).replace(/\.0$/, '')}M`
              : '0M'}
          </span>
        </div>

        {/* Right: Ratings */}
        <div
          className="flex items-center justify-center gap-2 bg-[#FFF0E1] text-[#FF8C00] text-base font-medium 
                     px-4 py-2 rounded-lg w-1/2"
        >
          <img
            src={ratingsIcon}
            alt="Ratings Icon"
            className="w-5 h-5 object-contain"
          />
          <span>
            {ratingAvg
              ? Math.min(parseFloat(ratingAvg).toFixed(1), 5.0)
              : '0.0'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
