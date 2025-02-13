import React from 'react'
import logo from '../../../assets/logo.png';
import slide2 from '../../Byod/window-assets/slide2.png';

const Component2 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 relative">
      
     {/* Left Panel (Text) */}
     <div className="md:w-1/2 w-full text-center font-medium md:text-left">
        <ol className="list-decimal pl-6 text-black">
          <p className="font-normal text-lg">
           2. Go to <span className="font-semibold">Local Security Policy</span> → 
            <span className="font-semibold"> Account Policies</span> → 
            <span className="font-semibold"> Password Policy</span> and set the fields as stated.
          </p>
        </ol>
      </div>

    {/* Right Panel (Image) */}
    <div className="md:w-1/2 w-full flex justify-center items-center mt-6 md:mt-0">
      <img src={slide2} alt="Policy Table" className="w-full md:w-[90%] h-auto shadow-lg" />
    </div>

    {/* Bottom Left Logo */}
    <div className="absolute bottom-4 left-4">
      <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
    </div>

  </div>
  );
};

export default Component2
