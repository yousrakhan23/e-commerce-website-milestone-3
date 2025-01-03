import React from "react";

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      {/* Outer Ring */}
      <div className="relative flex justify-center items-center">
        {/* Large Spinner */}
        <div
          className="w-32 h-32 border-t-4 border-b-4 border-transparent border-t-[#161613] rounded-full animate-spin"
          style={{ animationDuration: "1.5s" }}
        ></div>
        {/* Medium Spinner */}
        <div
          className="absolute w-24 h-24 border-t-4 border-b-4 border-transparent border-t-[#4b38f7] rounded-full animate-spin"
          style={{ animationDuration: "2s" }}
        ></div>
        {/* Small Spinner */}
        <div
          className="absolute w-16 h-16 border-t-4 border-b-4 border-transparent border-t-[#fc87fc] rounded-full animate-spin"
          style={{ animationDuration: "2.5s" }}
        ></div>
        {/* Glow Effect */}
        <div className="absolute w-8 h-8 bg-[#2ae964] rounded-full shadow-lg shadow-[#afc93f]/50"></div>
      </div>
    </div>
  );
};

export default Loader;