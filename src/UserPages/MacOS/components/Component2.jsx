import React from 'react';
import logo from '../../../assets/logo.png';

const Component2 = () => {
  return (
    <div className="w-full h-screen bg-[#000F3C] flex flex-col justify-center items-center relative">

      {/* Text at Bottom Left */}
      <div className="absolute bottom-4 left-4 text-white text-sm sm:text-base md:text-lg">
        <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
      </div>
    </div>
  );
};

export default Component2;