import React from 'react'
import logo from '../../../assets/logo.png';
import slide4 from '../../Byod/window-assets/slide4.png';
import slide4_2 from '../../Byod/window-assets/slide4-2.png';

const Component4 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 relative">      
     {/* Left Panel (Text) */}
     <div className="md:w-1/2 w-full text-center font-medium md:text-left text-lg">
        <p className="font-normal mb-6">
          5. Open bit locker to see if devices are having bit locker enabled. If not enable bit locker for all devices.
        </p>
        
      <h1 className="text-3xl md:text-3xl font-semibold top-2 text-blue-700">Machine Domain Join & MFA Setup</h1>
      <p className="mt-2 font-normal text-gray-700">Please follow the steps below:</p>

      <ol className=" mt-2 font-normal list-decimal  text-black"> 
          6. In Windows Start menu, search for Settings and open Microsoft System Settings.       
      </ol>
    </div>

    {/* Right Panel (Image) */}
    <div className="md:w-1/2 w-full flex flex-col justify-center items-center space-y-8 mt-auto md:mt-0 -mb-40 ">
      <img src={slide4} alt="Policy Table 1" className="w-full md:w-[90%] h-auto shadow-lg" />
      <img src={slide4_2} alt="Policy Table 2" className="w-full md:w-[90%] h-auto shadow-lg " />
    </div>

    {/* Bottom Left Logo */}
    <div className="absolute -bottom-24 left-4">
      <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
    </div>

  </div>
  );
};

export default Component4
