import React from 'react';
import logo from '../../../assets/logo.png';
import img from '../images/slide 2.png'

const Component2 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center relative">
      <div className="flex w-full h-screen">
        <div className="w-1/2 md:pt-16 md:pl-16">
          <h1 className='font-semibold text-3xl'>Device Enrollment</h1>
          <h2 className='text-blue-500'>Before Starting:</h2>
          <ul className='list-disc md:pl-12'>
            <li>Start by selecting country/region when screen is visible.</li>
            <li>Connect to Wi-Fi to activate your mac (if Wi-Fi menu bar is not visible, use a USB-C docking with wired network)</li>
            <li>Plug your system with power source before you begin.</li>
            <li className='md:py-10'>Choose Language</li>
            <li>Select country or region and click "Continue". (If you proceed past the Country or Region setup without chossing a region, you will need to restart your MAC.)</li>
          </ul>
          <p className='md:pl-12 md:pt-6'>If remote onboarding, follow below steps else jump to step no.4</p>
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

export default Component2;