import React from "react";
import Quote from "../../assets/“.png";
import Bullets from "../../assets/Bullets.png";

const Testimonial = () => {
  return (
    <div className="bg-[#002228] flex flex-col sm:flex-row justify-between items-center w-full min-h-[80vh] px-6 md:px-0">
      {/* Left Arrow (hidden on small screens) */}
      <div className="hidden sm:flex justify-center items-center w-12 h-12 rounded-lg bg-[#004A53] text-white sm:ml-5 md:ml-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center p-6 sm:p-10 w-full sm:w-[90%] max-w-2xl">
        {/* Quote Icon */}
        <div className="flex justify-center items-center w-12 h-12 rounded-full bg-[#004A53] text-cyan-400 mb-5">
          <img src={Quote} alt="Quote" className="w-5 h-5" />
        </div>

        {/* Testimonial Text */}
        <h1 className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-5 px-4">
          Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </h1>

        {/* Name */}
        <h1 className="text-md sm:text-lg text-cyan-400 font-semibold">John Doe</h1>

        {/* Job Title */}
        <p className="text-sm text-gray-400 mt-1">
          Chief Strategy Officer @ Company
        </p>

        {/* Bullets */}
        <img src={Bullets} alt="Bullets" className="mt-6" />
      </div>

      {/* Right Arrow (hidden on small screens) */}
      <div className="hidden sm:flex justify-center items-center w-12 h-12 rounded-lg bg-[#004A53] text-white sm:mr-5 md:mr-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Testimonial;
