import React from 'react';
import logo from '../../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Component20 = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen bg-[#000F3C] flex flex-col justify-center items-center relative">
      {/* Logo at Top Center */}
      <div className="absolute top-4 sm:top-8">
        <img src={logo} alt="Logo" className="w-8 sm:w-12 h-auto" /> {/* Responsive logo size */}
      </div>

      {/* Text at Center */}
      <div className="text-center px-4"> {/* Added padding for small screens */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-regular text-[#B4FFFF]">
          Thank you
        </h1>
        <h1 className="text-2xl sm:text-md md:text-lg lg:text-xl font-regular text-[#B4FFFF]">
          Wish you
        </h1>
        <h1 className="text-2xl sm:text-md md:text-lg lg:text-xl font-regular text-[#B4FFFF]">
          Good Luck!
        </h1>
      </div>

      {/* Text at Bottom Left */}
      <div className="absolute bottom-4 left-4 text-white text-sm sm:text-base md:text-lg">
        telenor | shared services
      </div>
      <div className="absolute bottom-4 right-4 text-white font-bold text-sm sm:text-base md:text-lg cursor-pointer" onClick={()=>{navigate('/select-device')}}>
        EXIT
      </div>
    </div>
  );
};

export default Component20;