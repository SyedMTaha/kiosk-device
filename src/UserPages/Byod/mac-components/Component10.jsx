import React from 'react'
import logo from '../../../assets/logo.png';
import slide10 from '../../Byod/mac-assests/slide10.png'; 
import slide10_2 from '../../Byod/mac-assests/slide10-2.png';

const Component10 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-start md:items-center justify-center px-6 md:px-16 relative">
  
    {/* Left Panel (Text) */}
    <div className="md:w-1/2 w-full text-center md:text-left  md:mt-0"> { /* mb-80 */}
      
      <p className="mt-4 font-normal list-decimal  text-black text-lg">       
          21. Select <span className='font-semibold'>"Personal Device"</span> From Drop Down and press <span className='font-semibold'>"Done"</span>button  
      </p>


      <p className="font-normal text-lg mt-4">
           22. Go to <span className="font-semibold underline text-[#0000ff]"> portal.office.com</span> in a browser window
      </p>

      <p className='mt-2 font-normal text-lg'>
        You will be prompted for certificate selection page 
      </p>

    </div>

     {/* Right Panel (Image) */}
     <div className="md:w-1/2 w-full flex flex-col justify-center items-center space-y-6 mt-auto md:mt-0 ">
      <img src={slide10} alt="Policy Table 1" className="w-full md:w-[80%] h-auto shadow-lg" />
      <img src={slide10_2} alt="Policy Table 2" className="w-full md:w-[80%] h-auto shadow-lg " />
    </div>


    {/* Bottom Left Logo */}
    <div className="absolute bottom-4 left-4">
      <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
    </div>

  </div>
  );
};

export default Component10