import React from 'react';
import logo from '../../../assets/logo.png';
import img from '../images/slide 2.png'

const Component2 = () => {
  return (
    <div className="w-full h-screen bg-[#000F3C] flex flex-col justify-center text-white items-center relative px-4 sm:px-8 md:px-16 lg:px-24">
      <ul className='list-disc text-sm sm:text-base md:text-lg'>
        <li>Please ensure to download the Microsoft "Authenticator" application on your cell phones as it will be necessary during the onboarding process.</li>
        <img src={img} alt="" width={500} className='mx-auto py-4 '  />
        <li>On the following slide, you will find video tutorial for self-device enrollment.</li>
        <li>Please utilize the provided email address and one-time password to log in, and then follow the instructional video guide accordingly.</li>
      </ul>
      {/* Text at Bottom Left */}
      <div className="absolute bottom-4 left-4 text-white text-sm sm:text-base md:text-lg">
        <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
      </div>
    </div>
  );
};

export default Component2;