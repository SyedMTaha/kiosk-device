import React from 'react';
import logo from '../../../assets/logo.png';
import img from '../images/slide12.png'

const Component12 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center relative">
      <div className="flex w-full h-screen">
        <div className="w-1/2 md:pt-16 md:pl-16 flex flex-col md:gap-[12rem]">
          <ul className='list-disc'>
            <li>Setup OneDrive sync the first time OneDrive is started.</li>
          </ul>
          <div className="">
            <h1 className='font-bold'>Global Protect VPN</h1>
            <p>GlobalProtect VPN requires users to log in with their Office 365 accounts.</p>
          </div>
        </div>
        <div className="w-1/2">
        <img src={img} alt="" className='w-[300px] mx-auto' />
        </div>
      </div>

      {/* Text at Bottom Left */}
      <div className="absolute bottom-4 left-4 text-white text-sm sm:text-base md:text-lg">
        <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
      </div>
    </div>
  );
};

export default Component12;