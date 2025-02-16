import React from 'react';
import logo from '../../../assets/logo.png';
import img from '../images/slide15.png'

const Component15 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center relative">
      <div className="flex w-full h-screen">
        <div className="w-1/2 md:pt-16 md:pl-16 flex flex-col md:gap-[12rem]">
          <ul className='list-disc'>
            <li>Sign-in when using Edge for first time and sync settings using the account automatically discovered by the Edge</li>
          </ul>
        </div>
        <div className="w-1/2">
        <img src={img} alt="" className='w-[490px] mx-auto' />
        </div>
      </div>

      {/* Text at Bottom Left */}
      <div className="absolute bottom-4 left-4 text-white text-sm sm:text-base md:text-lg">
        <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
      </div>
    </div>
  );
};

export default Component15;