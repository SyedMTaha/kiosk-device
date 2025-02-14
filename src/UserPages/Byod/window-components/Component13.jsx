import React from 'react'
import logo from '../../../assets/logo.png';
import slide13 from '../../Byod/window-assets/slide13.png';

const Component13 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-start md:items-center justify-center px-6 md:px-16 relative">
    
    {/* Left Panel (Text) */}
    <div className="md:w-1/2 w-full text-center md:text-left  md:mt-0"> { /* mb-80 */}
      <h1 className="text-3xl md:text-3xl font-semibold text-blue-700">Report Generation and Resolution (If user experience Compliance Issue)</h1>
      <p className='mt-4 font-normal list-decimal  text-black text-lg'> If user still faces any compliances issue a report can be generated to reflect the policies and missing policies can be identified.</p>
      <p className="mt-4 font-normal text-gray-700 text-lg">Please follow the steps below:</p>

      {/* Numbered List */}
      <div className="md:w-1/2 w-full text-center font-medium md:text-left">
        <ol className="list-decimal  text-black">
          <p className="font-normal text-lg">
           1. Go to <span className="font-semibold">Accounts</span> → 
            <span className="font-semibold"> Access work or school</span> → 
            <span className="font-semibold"> Select Account </span> → <span className='font-semibold'> Click info button</span> 
          </p>
        </ol>
      </div>

    </div>

    {/* Right Panel (Image) */}
    <div className="md:w-1/2 w-full flex justify-center items-center">
      <img src={slide13} alt="Policy Table" className="w-full md:w-[80%] h-auto shadow-lg" />
    </div>

    {/* Bottom Left Logo */}
    <div className="absolute bottom-4 left-4">
      <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
    </div>

  </div>
  );
};

export default Component13