import React from 'react';
import logo from '../../../assets/logo.png';
import slide1 from '../../Byod/window-assets/slide1.png';


const Component1 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-start md:items-center justify-center px-6 md:px-16 relative">
    
    {/* Left Panel (Text) */}
    <div className="md:w-1/2 w-full text-center md:text-left  md:mt-0"> { /* mb-80 */}
      <h1 className="text-3xl md:text-3xl font-semibold text-blue-700">Policy Setup</h1>
      <p className="mt-4 font-normal text-gray-700 text-lg">Please follow the steps below:</p>

      {/* Numbered List */}
      <ol className="mt-4 font-normal list-decimal pl-6 text-black text-lg">
        <li>
          Policy must be set up accordingly, otherwise the user will not be able to use O365 services.
        </li>
      </ol>
    </div>

    {/* Right Panel (Image) */}
    <div className="md:w-1/2 w-full flex justify-center items-center">
      <img src={slide1} alt="Policy Table" className="w-full md:w-[80%] h-auto shadow-lg" />
    </div>

    {/* Bottom Left Logo */}
    <div className="absolute bottom-4 left-4">
      <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
    </div>

  </div>
  );
};

export default Component1;