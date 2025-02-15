import React from 'react'
import logo from '../../../assets/logo.png';
import slide4 from '../../Byod/mac-assests/slide4.png'; 
import slide4_2 from '../../Byod/mac-assests/slide4-2.png';

const Component4 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-start md:items-center justify-center px-6 md:px-16 relative">
    
    {/* Left Panel (Text) */}
    <div className="md:w-1/2 w-full text-center md:text-left  md:mt-0"> { /* mb-80 */}
      <h1 className="text-3xl md:text-3xl font-semibold text-blue-700">Machine Enrollment and Account Activation</h1>

      <p className="mt-4 font-normal list-decimal  text-black text-lg">       
          9. You should now be navigated to a Page asking for device enrollment.  
      </p>

      <p className="mt-1 font-normal list-decimal  text-black text-lg">       
          Press <span className='font-semibold '> 'Enroll now'  </span> button 
      </p>

      <p className="mt-4 font-normal list-decimal  text-black text-lg">       
          10. In the new window, Press <span className='font-semibold'> "Get the app"  </span> button. Company portal app package would be downloaded. 
      </p>

    </div>

    {/* Right Panel (Image) */}
    <div className="md:w-1/2 w-full flex flex-col justify-center items-center space-y-6 mt-auto md:mt-0">
      {/* Portrait Image */}
      <img src={slide4} alt="Policy Table 1" className="w-[60%] md:w-[55%] max-h-[400px] shadow-lg object-contain" />
      {/* Landscape Image */}
      <img src={slide4_2} alt="Policy Table 2" className="w-[90%] md:w-[70%] max-h-[250px] shadow-lg object-contain" />
    </div>


    {/* Bottom Left Logo */}
    <div className="absolute bottom-4 left-4">
      <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
    </div>

  </div>
  );
};

export default Component4
