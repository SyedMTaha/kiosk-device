import React from 'react'
import logo from '../../../assets/logo.png';
import slide11 from '../../Byod/window-assets/slide11.png';
import slide11_2 from '../../Byod/window-assets/slide11-2.png';

const Component11 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 relative">      
     {/* Left Panel (Text) */}
     <div className="md:w-1/2 w-full text-center font-medium md:text-left text-lg">
    
      <p className=" mt-2 font-normal list-decimal  text-black"> 
          5. Receive call for Authentication and press <span className='font-bold '> # </span> on your phone to confrim       
      </p>

      <p className=" mt-2 font-normal list-decimal  text-black"> 
          6. To stay signed in, press the <span className='font-semibold '> 'yes' </span> button       
      </p>

    </div>

    {/* Right Panel (Image) */}
    <div className="md:w-1/2 w-full flex flex-col justify-center items-center space-y-8 mt-auto md:mt-0 ">
      <img src={slide11} alt="Policy Table 1" className="w-full md:w-[90%] h-auto shadow-lg" />
      <img src={slide11_2} alt="Policy Table 2" className="w-full md:w-[90%] h-auto shadow-lg " />
    </div>

    {/* Bottom Left Logo */}
    <div className="absolute bottom-4 left-4 text-white text-sm sm:text-base md:text-lg">
      <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto " />
    </div>

  </div>
  );
};

export default Component11