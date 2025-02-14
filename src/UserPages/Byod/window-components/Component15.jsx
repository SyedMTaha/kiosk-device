import React from 'react'
import logo from '../../../assets/logo.png';
import slide15 from '../../Byod/window-assets/slide15.png';
import slide15_2 from '../../Byod/window-assets/slide15-2.png';

const Component15 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 relative">      
     {/* Left Panel (Text) */}
     <div className="md:w-1/2 w-full text-center font-medium md:text-left text-lg">
    
      <p className=" mt-2 font-normal list-decimal  text-black"> 
          3. Open Generated Report.       
      </p>

      <p className=" mt-2 font-normal list-decimal  text-black"> 
          4. Scroll down to <span className='font-semibold'>Managed Policies</span>  Section and check if you have all the policies.         
      </p>

    </div>

    {/* Right Panel (Image) */}
    <div className="md:w-1/2 w-full flex flex-col justify-center items-center space-y-8 mt-auto md:mt-0 ">
      <img src={slide15} alt="Policy Table 1" className="w-full md:w-[90%] h-auto shadow-lg" />
      <img src={slide15_2} alt="Policy Table 2" className="w-full md:w-[90%] h-auto shadow-lg " />
    </div>

    {/* Bottom Left Logo */}
    <div className="absolute bottom-4 left-4 text-white text-sm sm:text-base md:text-lg">
      <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto " />
    </div>

  </div>
  );
};

export default Component15