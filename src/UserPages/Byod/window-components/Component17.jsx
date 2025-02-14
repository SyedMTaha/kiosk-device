import React from 'react'
import logo from '../../../assets/logo.png';
import slide17 from '../../Byod/window-assets/slide17.png';
import slide17_2 from '../../Byod/window-assets/slide17-2.png';

const Component15 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 relative">      
     {/* Left Panel (Text) */}
     <div className="md:w-1/2 w-full text-center font-medium md:text-left text-lg">
    
      <p className=" mt-2  font-normal list-decimal  text-black"> 
          6. Open Windows Registry and navigate to <span className='font-semibold '> "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\PolicyManager \Providers \516544BA-8DBA-487C-8275-40442591B37B\default\Device\DeviceLock" </span> path. (The GUID used in the above example is <span className='font-semibold'> "516544BA-8DBA-487C-8275-40442591B37B"</span> and for your laptop, it can be found in the Config Source column against the Device Lock value in the <span className='font-semibold'> Area</span> Column from the generated report). Create a new Dword with <span className='font-semibold'> DevicePasswordExpiration </span>title and set it to 90 decimal value.
      </p>

      <p className=" mt-2 font-normal list-decimal  text-black"> 
          7. Restart and sync your device. Sync option can be found by following step 1.         
      </p>

    </div>

    {/* Right Panel (Image) */}
    <div className="md:w-1/2 w-full flex flex-col justify-center items-center space-y-8 mt-auto md:mt-0 ">
       <img src={slide17} alt="Policy Table 1" className="w-full md:w-[90%] h-auto shadow-lg" /> 
      <img src={slide17_2} alt="Policy Table 2" className="w-full md:w-[90%] h-auto shadow-lg " />
    </div>

    {/* Bottom Left Logo */}
    <div className="absolute bottom-4 left-4 text-white text-sm sm:text-base md:text-lg">
      <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto " />
    </div>

  </div>
  );
};

export default Component15