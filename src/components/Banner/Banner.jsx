import React from 'react';
import playstoreIcon from '../../assets/playstore-icon.png';
import appstoreIcon from '../../assets/appstore-icon.png';
import heroImage from '../../assets/hero.png';

const Banner = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#F3F3F3] w-full relative overflow-hidden py-20 px-6 lg:px-20 flex flex-col items-center text-center pb-0 mb-0">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          <span className="text-black">We Build </span>
          <br className="hidden md:block" />
          <span className="text-[#632EE3]">Productive </span>
          <span className="text-black">Apps</span>
        </h1>

        {/* Paragraph */}
        <p className="text-gray-700 text-sm md:text-lg max-w-3xl leading-relaxed mb-10">
          At HERO.IO, we craft innovative apps that make your life simpler,
          smarter, and more exciting. Transform your ideas into powerful digital
          experiences that truly make an impact.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button
            onClick={() =>
              window.open(
                'https://play.google.com/store/apps',
                '_blank',
                'noopener,noreferrer'
              )
            }
            className="flex items-center justify-center gap-2 border-2 border-[#632EE3] text-[#632EE3] px-6 py-3 rounded-md hover:bg-[#632EE3] hover:text-white font-semibold transition-all duration-300"
          >
            <img src={playstoreIcon} alt="Play Store" className="w-6 h-6" />
            Play Store
          </button>

          <button
            onClick={() =>
              window.open(
                'https://www.apple.com/app-store/',
                '_blank',
                'noopener,noreferrer'
              )
            }
            className="flex items-center justify-center gap-2 border-2 border-[#632EE3] text-[#632EE3] px-6 py-3 rounded-md hover:bg-[#632EE3] hover:text-white font-semibold transition-all duration-300"
          >
            <img src={appstoreIcon} alt="App Store" className="w-6 h-6" />
            App Store
          </button>
        </div>

        {/* Banner Image */}
        <img
          src={heroImage}
          alt="Hero Banner"
          className="w-full max-w-5xl object-contain drop-shadow-xl rounded-2xl"
        />
      </section>

      {/* ================= USER STATISTICS SECTION ================= */}
      <section className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-full text-white py-20 px-6 lg:px-20 text-center overflow-hidden mt-0 pt-0">
        <h3 className="text-2xl md:text-3xl font-semibold mt-16 mb-16">
          Trusted by Millions, Built for You
        </h3>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <p className="text-base opacity-80 mb-1">Total Downloads</p>
            <h1 className="text-5xl font-extrabold">29.6M</h1>
            <p className="text-sm mt-1 opacity-80">21% more than last month</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <p className="text-base opacity-80 mb-1">Total Reviews</p>
            <h1 className="text-5xl font-extrabold">906K</h1>
            <p className="text-sm mt-1 opacity-80">46% more than last month</p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <p className="text-base opacity-80 mb-1">Active Apps</p>
            <h1 className="text-5xl font-extrabold">132+</h1>
            <p className="text-sm mt-1 opacity-80">31 more launching soon</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
