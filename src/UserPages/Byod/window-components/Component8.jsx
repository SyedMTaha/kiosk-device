import React from 'react'
import logo from '../../../assets/logo.png';
import slide8 from '../../Byod/window-assets/slide8.png';
import slide8_2 from '../../Byod/window-assets/slide8-2.png';


const Component8 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 relative ">      
     {/* Left Panel (Text) */}
     <div className="md:w-1/2 w-full text-center font-medium md:text-left text-lg  ">      
        <p className=" mt-2 font-normal  text-black"> 
            15. Press  <span className='font-bold'> # </span> button to authenticate recieved call then press <span className='font-semibold'> Done </span>button       
        </p>

        <p className=" mt-2 font-normal  text-black"> 
          16. Prompt would apprear on screen containing  <span className='font-semibold'> "Join" </span> and <span className='font-semibold'> "Cancel" </span>  button. Check if domain name, username and user type is correct, and if they are, click the <span className='font-semibold'> "Join" </span> button         
        </p>
    </div>

    {/* Right Panel (Image) */}
    <div className="md:w-1/2 w-full flex flex-col justify-center items-center space-y-8 mt-auto md:mt-0  ">
      <img src={slide8} alt="Policy Table 1" className="w-full md:w-[90%] h-auto shadow-lg" />
      <img src={slide8_2} alt="Policy Table 2" className="w-full md:w-[90%] h-auto shadow-lg " />
    </div>

    {/* Bottom Left Logo */}
    <div className="absolute bottom-4 left-4 text-white text-sm sm:text-base md:text-lg">
      <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto " />
    </div>

  </div>
  );
};

export default Component8