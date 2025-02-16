import React from 'react';
import logo from '../../../assets/logo.png';
import img from '../images/slide8.png'

const Component8 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center relative">
      <div className="flex flex-col w-full h-screen md:pl-16 md:py-4">
        <ul className='list-disc'>
          <li>Create local admin.</li>
        </ul>
        <img src={img} alt="" className='w-[600px]' />
        <div className="">
          <p>Open System Preferences and go to Users & Groups.</p>
          <p>Click the padlock icon to unlock it.</p>
          <p>Select "+" to add a new account with the following details:</p>
          <p>Name: <span className='font-bold'>telenorlocaladmin</span></p>
          <p>Account Name: <span className='font-bold'>telenorlocaladmin</span></p>
          <p>Password: Use the initial standard password (which will be provided by <span className='font-bold'>local IT support)</span></p>
          <p>Select the new <span className='font-bold'>telenorlocaladmin</span> account and select <span className='font-bold'>"Allow user to administer this computer".</span></p>
          <p className='font-bold md:py-2'>WAIT FOR IT</p>
          <p>Yes, this will take some minutes. You will notice the Microsoft Intune Agent notification first. Then Microsoft Update Assistant notification. Company Portal is automatically assigned, it is assigned required to the dynamic Azure AD group based on enrollment profile.</p>
        </div>
      </div>

      {/* Text at Bottom Left */}
      <div className="absolute bottom-4 left-4 text-white text-sm sm:text-base md:text-lg">
        <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
      </div>
    </div>
  );
};

export default Component8;