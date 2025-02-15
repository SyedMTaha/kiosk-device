import React from 'react'
import logo from '../../../assets/logo.png';
import slide3 from '../../Byod/mac-assests/slide3.png'; 
import slide3_2 from '../../Byod/mac-assests/slide3-2.png';


const Component3 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-start md:items-center justify-center px-6 md:px-16 relative">
    
    {/* Left Panel (Text) */}
    <div className="md:w-1/2 w-full text-center md:text-left  md:mt-0"> { /* mb-80 */}
    
      <p className="mt-4 font-normal list-decimal  text-black text-lg">       
          7. You will receive a call to authenticate and after successful authentication would receive a <span className='font-semibold'> "Validation Successful"</span> message.
      </p>

      <p className="mt-4 font-normal list-decimal  text-black text-lg">       
          8. Press the <span className='font-semibold'> 'Done'</span> button. 
      </p>

    </div>

     {/* Right Panel (Image) */}
     <div className="md:w-1/2 w-full flex flex-col justify-center items-center space-y-8 mt-auto md:mt-0  ">
      <img src={slide3} alt="Policy Table 1" className="w-full md:w-[90%] h-auto shadow-lg" />
      <img src={slide3_2} alt="Policy Table 2" className="w-full md:w-[90%] h-auto shadow-lg " />
    </div>

    {/* Bottom Left Logo */}
    <div className="absolute bottom-4 left-4">
      <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
    </div>

  </div>
  );
};

export default Component3
