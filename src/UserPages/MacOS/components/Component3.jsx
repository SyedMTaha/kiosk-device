import React from 'react';
import logo from '../../../assets/logo.png';
import img from '../images/slide3.png'

const Component3 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center relative">
      <div className="flex w-full h-screen">
        <div className="w-1/2 md:pt-16 md:pl-16">
          <ul className='list-disc md:pl-12'>
            <li>Hold your iPhone/iPad with the Apple Configurator app open close to the MAC and scan the globe. (Only for remote enrollment without local IT support)</li>
            <li>Connect to Wi-Fi to activate your mac (if Wi-Fi menu bar is not visible, use a USB-C docking with wired network)</li>
            <li>Two options to enroll:
              <ol>
                <li>Use the iPhone camera to scan the screen's image.</li>
                <li>Select "Pair Manually" on the iPhone and click "Pair Manually" on your M, then enter the 6-digit code.</li>
              </ol>
            </li>
            <li className='md:pt-16'>A notice will confirm successful pairing. "This Mac has been assigned to organization name."</li>
          </ul>
        </div>
        <div className="w-1/2">
        <img src={img} alt="" className='w-[340px] mx-auto' />
        </div>
      </div>

      {/* Text at Bottom Left */}
      <div className="absolute bottom-4 left-4 text-white text-sm sm:text-base md:text-lg">
        <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
      </div>
    </div>
  );
};

export default Component3;