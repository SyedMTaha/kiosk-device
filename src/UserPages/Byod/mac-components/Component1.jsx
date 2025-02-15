import React from 'react';
import logo from '../../../assets/logo.png';
import slide1 from '../../Byod/mac-assests/slide1.png'; 
import slide1_2 from '../../Byod/mac-assests/slide1-2.png';


const Component1 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-start md:items-center justify-center px-6 md:px-16 relative">
    
    {/* Left Panel (Text) */}
    <div className="md:w-1/2 w-full text-center md:text-left  md:mt-0"> { /* mb-80 */}
      <h1 className="text-3xl md:text-3xl font-semibold text-blue-700">MFA Setup</h1>
      <p className="mt-4 font-normal text-gray-700 text-lg">Please follow the steps below:</p>

      <p className="mt-4 font-normal list-decimal  text-black text-lg">       
          1. Open Browser and Go ot URL <span className='underline font-semibold text-[#0000ff]'> portal.office.com  </span> 
      </p>

      <p className="mt-4 font-normal list-decimal  text-black text-lg">       
          2. Enter your current Windows username e.g. <span className='underline font-semibold text-[#0000ff]'> abc@telenor.se  </span> 
      </p>

      <p className="mt-4 font-normal list-decimal  text-black text-lg">       
          3. Press <span className='font-semibold'> "Next"  </span> button 
      </p>

      <p className="mt-4 font-normal list-decimal  text-black text-lg">       
          4. Enter your current Windows Password and press <span className='font-semibold'> "Sign in"  </span> button 
      </p>
    </div>

     {/* Right Panel (Image) */}
     <div className="md:w-1/2 w-full flex flex-col justify-center items-center space-y-8 mt-auto md:mt-0  ">
      <img src={slide1} alt="Policy Table 1" className="w-full md:w-[90%] h-auto shadow-lg" />
      <img src={slide1_2} alt="Policy Table 2" className="w-full md:w-[90%] h-auto shadow-lg " />
    </div>

    {/* Bottom Left Logo */}
    <div className="absolute bottom-4 left-4">
      <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
    </div>

  </div>
  );
};

export default Component1;