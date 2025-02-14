import React from 'react'
import logo from '../../../assets/logo.png';
import slide14 from '../../Byod/window-assets/slide14.png';

const Component14 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-start md:items-center justify-center px-6 md:px-16 relative">
    
    {/* Left Panel (Text) */}
    <div className="md:w-1/2 w-full text-center md:text-left  md:mt-0"> { /* mb-80 */}
      
      {/* Numbered List */}
      <p className="font-normal list-decimal  text-black text-lg">
          2. Scroll down to Create report  →  <span className='font-semibold'> Export</span>        
      </p>
    </div>

    {/* Right Panel (Image) */}
    <div className="md:w-1/2 w-full flex justify-center items-center">
      <img src={slide14} alt="Policy Table" className="w-full md:w-[80%] h-auto shadow-lg" />
    </div>

    {/* Bottom Left Logo */}
    <div className="absolute bottom-4 left-4">
      <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
    </div>

  </div>
  );
};
export default Component14