import React from "react";
import { TypeAnimation } from "react-type-animation";

const Header: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-black transition-colors duration-300">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 animate-pulse">
          Nyan Lin Htoo
        </h1>
        <div className="h-16 mb-8">
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              2000,
              "Frontend Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-2xl text-gray-800 dark:text-white"
            repeat={Infinity}
            cursor={true}
          />
        </div>
        <button className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300 transform hover:scale-105 dark:bg-purple-500 dark:hover:bg-purple-600">
          Explore My Work
        </button>
      </div>
    </div>
  );
};

export default Header;
