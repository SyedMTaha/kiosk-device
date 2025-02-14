import React from 'react'
import logo from '../../../assets/logo.png';
import slide10 from '../../Byod/window-assets/slide10.png';
import slide10_2 from '../../Byod/window-assets/slide10-2.png';

const Component10 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 relative">      
     {/* Left Panel (Text) */}
     <div className="md:w-1/2 w-full text-center font-medium md:text-left text-lg">
        
        
      <h1 className="text-3xl md:text-3xl font-semibold top-2 text-blue-700">Account Activation</h1>
      <p className="mt-2 font-normal text-gray-700">Please follow the steps below to access Office 365:</p>

      <p className=" mt-2 font-normal list-decimal  text-black"> 
          1. Open Browser and go to URL <span className='font-semibold text-[#0000ff] underline'> portal.office.com </span>       
      </p>

      <p className=" mt-2 font-normal list-decimal  text-black"> 
          2. Enter your current Windows username e.g. <span className='font-semibold text-[#0000ff] underline'> abc@telenor.se </span>       
      </p>

      <p className=" mt-2 font-normal list-decimal  text-black"> 
          3. Press <span className='font-semibold '> 'Next' </span> button       
      </p>

      <p className=" mt-2 font-normal list-decimal  text-black"> 
          4. Enter your current Windows password and press the <span className='font-semibold #ID4ED8 '> 'Sign in' </span> button       
      </p>
    </div>

    {/* Right Panel (Image) */}
    <div className="md:w-1/2 w-full flex flex-col justify-center items-center space-y-8 mt-auto md:mt-0 ">
      <img src={slide10} alt="Policy Table 1" className="w-full md:w-[90%] h-auto shadow-lg" />
      <img src={slide10_2} alt="Policy Table 2" className="w-full md:w-[90%] h-auto shadow-lg " />
    </div>

    {/* Bottom Left Logo */}
    <div className="absolute bottom-4 left-4 text-white text-sm sm:text-base md:text-lg">
      <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto " />
    </div>

  </div>
  );
};

export default Component10