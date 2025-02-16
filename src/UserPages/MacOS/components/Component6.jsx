import React from 'react';
import logo from '../../../assets/logo.png';
import img from '../images/slide6.png'

const Component6 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center relative">
      <div className="flex w-full h-screen">
        <div className="w-1/2 md:pt-16 md:pl-16">
          <ul className='list-disc md:pl-12 md:space-y-[12rem]'>
            <li>This is a local user account; you will need to remember the password.<br/>(Set a temporary password as it will have to change later during enrollment)</li>
            <li className=''>Continue. No need to enable location services.</li>
          </ul>
        </div>
        <div className="w-1/2">
        <img src={img} alt="" className='w-[320px] mx-auto' />
        </div>
      </div>

      {/* Text at Bottom Left */}
      <div className="absolute bottom-4 left-4 text-white text-sm sm:text-base md:text-lg">
        <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
      </div>
    </div>
  );
};

export default Component6;