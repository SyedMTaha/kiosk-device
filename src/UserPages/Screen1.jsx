import React from "react";
import Banner from "../assets/banner.png";
import AppleLogo from "../assets/apple-logo.png";
import WindowsLogo from "../assets/windows-logo.png";
import ByodLogo from "../assets/byod-logo.png";
import { useNavigate } from "react-router-dom";

const Screen1 = () => {
  const navigate=useNavigate();
  return (
    <div className="h-screen w-full flex flex-col bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Banner */}
      <div className="w-full">
        <img src={Banner} alt="Banner" className="w-full" />
      </div>

      {/* Heading */}
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Welcome to Diversity Device Self Setup Kiosk
        </h1>
        <h1 className="text-2xl text-gray-600">
          Select Your Operating System
        </h1>
      </div>

      {/* Cards */}
      <div className="flex justify-center items-center gap-16 mt-12">
        {/* MacOS Card */}
        <div className="glassmorphism-card hover:shadow-xl hover:scale-105 hover:border-[#4F46E5] transition-all duration-300 border-2 border-[#1D2788] px-4 pt-2 w-[10vw] text-center rounded-md cursor-pointer">
          <img src={AppleLogo} alt="MacOS" className="w-14 h-14 mx-auto mb-4" />
          <p className="text-xl font-semibold text-gray-800">MacOS</p>
        </div>

        {/* Windows Card */}
        <div className="glassmorphism-card hover:shadow-xl hover:scale-105 hover:border-[#4F46E5] transition-all duration-300 border-2 border-[#1D2788] px-4 pt-2 w-[10vw] text-center rounded-md cursor-pointer" onClick={()=>{navigate('/windows-type')}}>
          <img src={WindowsLogo} alt="Windows" className="w-14 h-14 mx-auto mb-4" />
          <p className="text-xl font-semibold text-gray-800">Windows</p>
        </div>

        {/* BYOD Card */}
        <div className="glassmorphism-card hover:shadow-xl hover:scale-105 hover:border-[#4F46E5] transition-all duration-300 border-2 border-[#1D2788] px-4 pt-2 w-[10vw] text-center rounded-md cursor-pointer">
          <img src={ByodLogo} alt="BYOD" className="w-14 h-14 mx-auto mb-4" />
          <p className="text-xl font-semibold text-gray-800">BYOD</p>
        </div>
      </div>
    </div>
  );
};

export default Screen1;