import React from 'react'
import logo from '../../../assets/logo.png';
import slide2 from '../../Byod/mac-assests/slide2.png'; 
import slide2_2 from '../../Byod/mac-assests/slide2-2.png';

const Component2 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-start md:items-center justify-center px-6 md:px-16 relative">
    
    {/* Left Panel (Text) */}
    <div className="md:w-1/2 w-full text-center md:text-left  md:mt-0"> { /* mb-80 */}
    
      <p className="mt-4 font-normal list-decimal  text-black text-lg">       
          5. Click <span className='font-semibold '> 'Next'  </span> to setup Multi Factor Authentication as an additional security layer  
      </p>

      <p className="mt-4 font-normal list-decimal  text-black text-lg">       
          6. When you log in for the first time, Multi Factor Authentication needs to be setup. 
      </p>

      <p className="mt-4 font-normal list-decimal  text-black text-lg">       
          Select <span className='font-semibold'> "Authentication phone" ,</span> Country Code and Enter Phone Number.
      </p>

      <p className="mt-1 font-normal list-decimal  text-black text-lg">       
          Select <span className='font-semibold'> "Call me"  </span> Method and Press <span className='font-semibold'> 'Next'</span> 
      </p>
    </div>

     {/* Right Panel (Image) */}
     <div className="md:w-1/2 w-full flex flex-col justify-center items-center space-y-8 mt-auto md:mt-0  ">
      <img src={slide2} alt="Policy Table 1" className="w-full md:w-[90%] h-auto shadow-lg" />
      <img src={slide2_2} alt="Policy Table 2" className="w-full md:w-[90%] h-auto shadow-lg " />
    </div>

    {/* Bottom Left Logo */}
    <div className="absolute bottom-4 left-4">
      <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
    </div>

  </div>
  );
};

export default Component2
