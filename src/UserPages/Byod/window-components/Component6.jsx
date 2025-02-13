import React from 'react'
import logo from '../../../assets/logo.png';
import slide6 from '../../Byod/window-assets/slide6.png';
import slide6_2 from '../../Byod/window-assets/slide6-2.png';

const Component6 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 relative">      
     {/* Left Panel (Text) */}
     <div className="md:w-1/2 w-full text-center font-medium md:text-left text-lg  ">      
        <p className=" mt-2 font-normal  text-black"> 
            11. Enter your current Windows password and press  <span className='font-semibold'> "Sign in" </span> button       
        </p>

        <p className=" mt-2 font-normal  text-black"> 
          12. Click <span className='font-semibold'> 'Next' </span> to setup Multi Factor Authentication as an additional security layer         
        </p>
    </div>

    {/* Right Panel (Image) */}
    <div className="md:w-1/2 w-full flex flex-col justify-center items-center space-y-8 mt-auto md:mt-0  ">
      <img src={slide6} alt="Policy Table 1" className="w-full md:w-[90%] h-auto shadow-lg" />
      <img src={slide6_2} alt="Policy Table 2" className="w-full md:w-[90%] h-auto shadow-lg " />
    </div>

    {/* Bottom Left Logo */}
    <div className="absolute bottom-4 left-4 text-white text-sm sm:text-base md:text-lg">
      <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
    </div>

  </div>
  );
};

export default Component6