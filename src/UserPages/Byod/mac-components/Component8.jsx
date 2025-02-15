import React from 'react'
import logo from '../../../assets/logo.png';
import slide8 from '../../Byod/mac-assests/slide8.png'; 
import slide8_2 from '../../Byod/mac-assests/slide8-2.png';


const Component8 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-start md:items-center justify-center px-6 md:px-16 relative">
  
    {/* Left Panel (Text) */}
    <div className="md:w-1/2 w-full text-center md:text-left  md:mt-0"> { /* mb-80 */}
      
      <p className="mt-4 font-normal list-decimal  text-black text-lg">       
          17. Enter your O365 credentials and press ok button.  
      </p>

      <p className='mt-2 font-normal text-lg'>
        User should be navigated to <span className='font-semibold'>"Confirm device management"</span>page
      </p>

      <p className="font-normal text-lg mt-4">
           18. Go to <span className="font-semibold">Apple</span> → <span className="font-semibold"> System Preferences </span> →  <span className="font-semibold"> Profile</span>
          </p>

    </div>

     {/* Right Panel (Image) */}
     <div className="md:w-1/2 w-full flex flex-col justify-center items-center space-y-6 mt-auto md:mt-0 ">
      <img src={slide8} alt="Policy Table 1" className="w-full md:w-[60%] h-auto shadow-lg" />
      <img src={slide8_2} alt="Policy Table 2" className="w-full md:w-[60%] h-auto shadow-lg " />
    </div>


    {/* Bottom Left Logo */}
    <div className="absolute bottom-4 left-4">
      <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
    </div>

  </div>
  );
};

export default Component8