
import React from 'react'
import logo from '../../../assets/logo.png';
import slide7 from '../../Byod/window-assets/slide7.png';
import slide7_2 from '../../Byod/window-assets/slide7-2.png';

const Component7 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 relative">      
     {/* Left Panel (Text) */}
     <div className="md:w-1/2 w-full text-center font-medium md:text-left text-lg  ">      
        <p className=" mt-2 font-normal  text-black"> 
            13. When you log in for the time, Multi Facto Authentication needs to be setup.       
        </p>
        <p className=" mt-2 font-normal  text-black"> 
            Select <span className="font-semibold"> "Authentication phone",</span> Country Code and Enter Phone Number.       
        </p>
        <p className=" mt-2 font-normal  text-black"> 
            Select <span className="font-semibold"> "Call me" </span> Method And Press <span className='font-semibold'>'Next'</span>.       
        </p>


        <p className=" mt-2 font-normal  text-black"> 
          14. You will now recieve a call or message for authentication. If you get a call, the window on your phone will look like the screen dump to the right.     
        </p>
    </div>

    {/* Right Panel (Image) */}
    <div className="md:w-1/2 w-full flex flex-col justify-center items-center  mt-auto md:mt-0  ">
      <img src={slide7} alt="Policy Table 1" className="w-full md:w-[90%] h-auto shadow-lg" />
      <img src={slide7_2} alt="Policy Table 2" className="w-full md:w-[90%] h-auto shadow-lg" />
    </div>

    {/* Bottom Left Logo */}
    <div className="absolute bottom-1 left-4 text-white text-sm sm:text-base md:text-lg">
      <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto mb-4" />
      
    </div>

  </div>
  );
};

export default Component7