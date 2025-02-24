import React from 'react'
import logo from '../../../assets/logo.png';
import slide5 from '../../Byod/window-assets/slide5.png';
import slide5_2 from '../../Byod/window-assets/slide5-2.png';

const Component5 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 relative">      
     {/* Left Panel (Text) */}
     <div className="md:w-1/2 w-full text-center font-medium md:text-left text-lg  ">
        <p className="mt-2 font-normal ">
          7. In Windows Settings, select <span className='font-semibold'> 'Accounts' </span>
        </p>

        <p className=" mt-2 font-normal  text-black"> 
            8. Press <span className='font-semibold'> Connect </span> for "Add a word or school account"        
        </p>

        <p className=" mt-2 font-normal  text-black"> 
          9. Select connect 'Option' and you will be navigated to <span className='font-semibold'> "Let's get you signed in" </span>         
        </p>

        <p className=" mt-2 font-normal  text-black"> 
          10. Enter your current Windows user name and press  <span className='font-semibold'> 'Next' </span> button         
        </p>
    </div>

    {/* Right Panel (Image) */}
    <div className="md:w-1/2 w-full flex flex-col justify-center items-center space-y-8 mt-auto md:mt-0 ">
      <img src={slide5} alt="Policy Table 1" className="w-full md:w-[80%] h-auto shadow-lg" />
      <img src={slide5_2} alt="Policy Table 2" className="w-full md:w-[85%] h-auto shadow-lg " />
    </div>

    {/* Bottom Left Logo */}
    <div className="absolute bottom-4 left-4 text-white text-sm sm:text-base md:text-lg">
      <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
    </div>

  </div>
  );
};

export default Component5
