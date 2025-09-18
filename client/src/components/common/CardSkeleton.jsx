import React from "react";

const CardSkeleton = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow animate-pulse">
      {/* Image placeholder */}
      <div className="aspect-video bg-gray-200"></div>

      {/* Category chip */}
      <div className="ml-5 mt-4 px-3 py-1 inline-block">
        <div className="w-20 h-4 bg-gray-200 rounded-full"></div>
      </div>

      {/* Title + description */}
      <div className="p-5">
        <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
        <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
