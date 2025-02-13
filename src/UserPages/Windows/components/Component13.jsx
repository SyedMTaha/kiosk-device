import React from 'react';
import img from '../images/slide 13.png';

const Component13 = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen w-full">
      <div className="w-full sm:w-[30vw] flex flex-col items-center  sm:pl-16 md:pl-20">
        <div className="flex flex-col gap-4 text-center sm:text-left text-[#000F3C]">
          <h1 className="font-semibold  text-3xl sm:text-4xl md:text-5xl">Authenticator Setup</h1>
          <ul className="list-disc text-lg sm:text-xl space-y-6 pl-4">
              <li>Select <span className='font-bold'>Next</span> on the <span className='font-bold'>Scan the QR code</span> page on your computer. A notification is sent to the Microsoft Authenticator app on your mobile device, to test your account.</li>
              <li> <span className='font-bold'>Approve</span> the notification in the Microsoft Authenticator app, and then select  <span className='font-bold'>Next</span>. Your security info is updated to use the Microsoft Authenticator app by default to verify your identity when using two-step verification.</li>
          </ul>
        </div>
      </div>
      <div className="w-full sm:w-[70vw] flex justify-center items-center mt-8 sm:mt-0">
        <img src={img} alt="Slide 3" className="w-full sm:w-[440px] md:w-[500px]" />
      </div>
    </div>
  );
};

export default Component13;
