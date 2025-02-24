import React from 'react'
import logo from '../../../assets/logo.png';
import slide3 from '../../Byod/window-assets/slide3.png';
import slide3_2 from '../../Byod/window-assets/slide3-2.png';


const Component3 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 relative">
      
     {/* Left Panel (Text) */}
     <div className="md:w-1/2 w-full text-center font-medium md:text-left">
        <ol className="list-decimal pl-6 text-black">
          <p className="font-normal text-lg">
           3. Go to <span className="font-semibold">Local Security Policy</span> → 
            <span className="font-semibold"> Local Policies</span> → 
            <span className="font-semibold"> Security</span> Options then set the field as stated.
          </p>
        </ol>

        <ol className="list-decimal pl-6 text-black text-lg">
          <p className="font-normal">
           4. Open windoes defender Firewall and Check Windows Defender Firewall state. It should be <span className='font-semibold'> On </span>            
          </p>
        </ol>
      </div>

    {/* Right Panel (Image) */}
    <div className="md:w-1/2 w-full flex flex-col justify-center items-center space-y-8 mt-auto md:mt-0 ">
      <img src={slide3} alt="Policy Table 1" className="w-full md:w-[70%] h-auto shadow-lg" />
      <img src={slide3_2} alt="Policy Table 2" className="w-full md:w-[70%] h-auto shadow-lg " />
    </div>

    {/* Bottom Left Logo */}
    <div className="absolute bottom-4 left-4">
      <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
    </div>

  </div>
  );
};

export default Component3
