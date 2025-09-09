import React from "react";
import { assets } from "../../assets/assets";

const Hero = () => {
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24">
      <div className="text-center mt-20 mb-8">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary">
          <p>New AI feature integrated</p>
          <img src={assets.star_icon} className="w-2.5" alt="star icon" />
        </div>
        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700">
          My own <span className="text-primary">blogging</span> <br /> platform.
        </h1>
        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500">
          This is my space to share what matters, and to write without filters.
          Whether it's one word or a thousand, my story starts right here.
        </p>
        <form className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden">
          <input
            className="outline-none w-full pl-4"
            type="text"
            placeholder="Search for blog"
            required
          />
          <button
            className="bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <img
        src={assets.gradientBackground}
        alt="background image"
        className="absolute -top-50 -z-1 opacity-50"
      />
    </div>
  );
};

export default Hero;
