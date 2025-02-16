import React from 'react';
import logo from '../../../assets/logo.png';
import img from '../images/slide10.png'

const Component10 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center relative">
      <div className="flex w-full h-screen">
        <div className="w-1/2 md:pt-16 md:pl-16">
          <p className='md:pb-6'>When prompted, select <span className='font-bold' >"Corporate Dedicated Device."</span></p>
          <p className='md:pb-[140px]'>Please wait until configurations and applications are installed.</p>
          <h1 className='font-bold'>Change computer account password.</h1>
          <ul className='list-disc'>
            <li>You will be asked to change your computer account password at next login due to password policies.</li>
            <li>If you are enrolling macOS Ventura or Sonoma you may experience the requirement to change your password earlier in the enrollment.</li>
          </ul>
        </div>
        <div className="w-1/2">
        <img src={img} alt="" className='w-[350px] mx-auto' />
        </div>
      </div>

      {/* Text at Bottom Left */}
      <div className="absolute bottom-4 left-4 text-white text-sm sm:text-base md:text-lg">
        <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
      </div>
    </div>
  );
};

export default Component10;