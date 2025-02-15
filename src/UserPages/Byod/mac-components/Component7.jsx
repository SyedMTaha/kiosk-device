
import React from 'react'
import logo from '../../../assets/logo.png';
import slide7 from '../../Byod/mac-assests/slide7.png'; 
import slide7_2 from '../../Byod/mac-assests/slide7-2.png';

const Component7 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 relative">      
     {/* Left Panel (Text) */}
     <div className="md:w-1/2 w-full text-center font-medium md:text-left text-lg  ">      
     <p className="mt-4 font-normal  text-lg">       
          15. Press <span className='font-semibold'> 'Continue'</span> button also on the next page
      </p>

      <p className='mt-2 font-normal text-lg'> 
        You will be navigated to the <span className='font-semibold'> "What's next" </span> page
      </p>

      <p className="mt-4 font-normal list-decimal  text-black text-lg">       
          16. Press  <span className='font-semibold'> Enroll </span> button. 
      </p>

    </div>

    {/* Right Panel (Image) */}
    <div className="md:w-1/2 w-full flex flex-col justify-center items-center space-y-8 mt-auto md:mt-0 ">
      <img src={slide7} alt="Policy Table 1" className="w-full md:w-[60%] h-auto shadow-lg" />
      <img src={slide7_2} alt="Policy Table 2" className="w-full md:w-[60%] h-auto shadow-lg " />
    </div>

    {/* Bottom Left Logo */}
    <div className="absolute bottom-1 left-4 text-white text-sm sm:text-base md:text-lg">
      <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto mb-4 " />
      
    </div>

  </div>
  );
};

export default Component7