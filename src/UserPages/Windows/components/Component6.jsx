import React from 'react';
import img from '../images/slide 6.png';

const Component6 = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen w-full">
      <div className="w-full sm:w-[30vw] flex flex-col items-center pt-16 sm:pl-16 md:pl-20">
        <div className="flex flex-col gap-4 text-center sm:text-left text-[#000F3C]">
          <h1 className="font-semibold  text-3xl sm:text-4xl md:text-5xl">Sign In</h1>
          <ul className="list-disc text-lg sm:text-xl space-y-6 pl-4">
              <li>Verify your registered number by checking the last two digits of your mobile number</li>
              <li>If they are correct, enter your complete mobile number without the country code then click <span className='font-bold'>"Next"</span></li>
              <li>You will then receive a text message with a verification code.</li>
          </ul>
        </div>
      </div>
      <div className="w-full sm:w-[70vw] flex justify-center items-center mt-8 sm:mt-0">
        <img src={img} alt="Slide 3" className="w-full sm:w-[500px] md:w-[600px]" />
      </div>
    </div>
  );
};

export default Component6;
