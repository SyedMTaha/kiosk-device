import React from 'react';
import logo from '../../../assets/logo.png';
import img from '../images/slide4.png'

const Component4 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center relative">
      <div className="flex w-full h-screen">
        <div className="w-1/2 md:pt-16 md:pl-16">
          <ul className='list-disc md:pl-12'>
            <li>Select "Not Now" for Accessibility.<br/>(Step 04)</li>
            <li className='md:pt-[12rem]'>During initial setup, connect to a network manually.</li>
          </ul>
        </div>
        <div className="w-1/2">
        <img src={img} alt="" className='w-[340px] mx-auto' />
        </div>
      </div>

      {/* Text at Bottom Left */}
      <div className="absolute bottom-4 left-4 text-white text-sm sm:text-base md:text-lg">
        <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
      </div>
    </div>
  );
};

export default Component4;