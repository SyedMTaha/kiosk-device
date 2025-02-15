import React from 'react'
import logo from '../../../assets/logo.png';
import slide9 from '../../Byod/mac-assests/slide9.png'; 
import slide9_2 from '../../Byod/mac-assests/slide9-2.png';

const Component9 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-start md:items-center justify-center px-6 md:px-16 relative">
  
    {/* Left Panel (Text) */}
    <div className="md:w-1/2 w-full text-center md:text-left  md:mt-0"> { /* mb-80 */}
      
      <p className="mt-4 font-normal list-decimal  text-black text-lg">       
          19. Press <span className='font-semibold'>'Approve'</span> button for Telenore ASA  
      </p>

      <p className='mt-2 font-normal text-lg'>
        A verification message should now appear on screen and you will be navigated to a <span className='font-semibold'>"You're all set!"</span> page
      </p>

      <p className="font-normal text-lg mt-4">
           20. Press <span className="font-semibold">Done</span> button.
          </p>

    </div>

     {/* Right Panel (Image) */}
     <div className="md:w-1/2 w-full flex flex-col justify-center items-center space-y-6 mt-auto md:mt-0 ">
      <img src={slide9} alt="Policy Table 1" className="w-full md:w-[70%] h-auto shadow-lg" />
      <img src={slide9_2} alt="Policy Table 2" className="w-full md:w-[70%] h-auto shadow-lg " />
    </div>


    {/* Bottom Left Logo */}
    <div className="absolute bottom-4 left-4">
      <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
    </div>

  </div>
  );
};

export default Component9