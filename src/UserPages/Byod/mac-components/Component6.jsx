import React from 'react'
import logo from '../../../assets/logo.png';
import slide6 from '../../Byod/mac-assests/slide6.png'; 
import slide6_2 from '../../Byod/mac-assests/slide6-2.png';

const Component6 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-start md:items-center justify-center px-6 md:px-16 relative">
    
    {/* Left Panel (Text) */}
    <div className="md:w-1/2 w-full text-center md:text-left  md:mt-0"> { /* mb-80 */}
    
      <p className="mt-4 font-normal  text-lg">       
          13. Press the <span className='font-semibold'> "Sign in"</span> button.
      </p>

      <p className='mt-2 font-normal text-lg'> 
        You will now be navigated to a page where you can set up Telenor ASA Access
      </p>

      <p className="mt-4 font-normal list-decimal  text-black text-lg">       
          14. Press  <span className='font-semibold'> 'Continue'</span> button. 
      </p>

    </div>

     {/* Right Panel (Image) */}
     <div className="md:w-1/2 w-full flex flex-col justify-center items-center space-y-8 mt-auto md:mt-0  ">
      <img src={slide6} alt="Policy Table 1" className="w-full md:w-[70%] h-auto shadow-lg" />
      <img src={slide6_2} alt="Policy Table 2" className="w-full md:w-[70%] h-auto shadow-lg " />
    </div>

    {/* Bottom Left Logo */}
    <div className="absolute bottom-4 left-4">
      <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
    </div>

  </div>
  );
};

export default Component6