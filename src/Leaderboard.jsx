import React from "react";

function Leaderboard({ className }) {
  return (
    <div className={`p-2 md:me-10 bg-linear-to-tl from-black to-gray-900 xl:w-1/6 md:w-1/3  min-w-60 w-full mb-8 h-100 rounded-xl shadow-yellow-500 md:shadow-xl shadow text-gray-300 border-2 border-yellow-500 ${className}`}>
      <h2 className="text-center text-2xl font-medium mb-3">Leaderboard</h2>
      <p className="text-center">No results yet</p>
    </div>
  );
};

export default Leaderboard;
