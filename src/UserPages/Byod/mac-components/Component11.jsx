import React from 'react'
import logo from '../../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import slide11 from '../../Byod/mac-assests/slide11.png'; 
import slide11_2 from '../../Byod/mac-assests/slide11-2.png';

const Component11 = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-start md:items-center justify-center px-6 md:px-16 relative">
  
    {/* Left Panel (Text) */}
    <div className="md:w-1/2 w-full text-center md:text-left  md:mt-0"> { /* mb-80 */}
      
      <p className="mt-4 font-normal list-decimal  text-black text-lg">       
          23. Select Certificate and press <span className='font-semibold'>'Ok'</span> button  
      </p>

      <p className='font-normal text-lg mt-2'>
          User should be navigated to Office 365 home page        
      </p>

      <p className="text-3xl md:text-3xl font-semibold text-blue-700 mt-6">
           Required Policies
      </p>

      <p className='mt-2 font-normal text-lg'>
        1. These policies must be ensured for Mac to be COmpliant. 
      </p>

    </div>

     {/* Right Panel (Image) */}
     <div className="md:w-1/2 w-full flex flex-col justify-center items-center space-y-6 mt-auto md:mt-0 ">
      <img src={slide11} alt="Policy Table 1" className="w-full md:w-[80%] h-auto shadow-lg" />
      <img src={slide11_2} alt="Policy Table 2" className="w-full md:w-[80%] h-auto shadow-lg " />
    </div>

    {/* Exit Button */}
    <p className="absolute bottom-4 right-8 text-black font-bold text-sm sm:text-base md:text-xl cursor-pointer" onClick={()=>{navigate('/byod-type')}}>
        EXIT
    </p>

    {/* Bottom Left Logo */}
    <div className="absolute bottom-4 left-4">
      <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
    </div>

  </div>
  );
};

export default Component11