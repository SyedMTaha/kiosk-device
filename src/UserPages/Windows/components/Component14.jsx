import React from 'react';
import img from '../images/slide 14.png';

const Component14 = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen w-full">
      <div className="w-full sm:w-[30vw] flex flex-col items-center  sm:pl-16 md:pl-20">
        <div className="flex flex-col gap-4 text-center sm:text-left text-[#000F3C]">
          <h1 className="font-semibold  text-3xl sm:text-4xl md:text-5xl">Device Setup</h1>
          <ul className="list-disc text-lg sm:text-xl space-y-6 pl-4">
              <li>Automatic <span className='font-bold'>Device Preparation</span> and <span className='font-bold'>Device Setup</span> will begin. This process is estimated to take approximately 30 minutes.</li>
              <li> At this stage sit back and relax. <span className='font-bold'>Dont not click on “Continue Anyways”</span></li>
              <li>Your device will restart once, but it will automatically return to the same device configuration page.</li>
          </ul>
        </div>
      </div>
      <div className="w-full sm:w-[70vw] flex justify-center items-center mt-8 sm:mt-0">
        <img src={img} alt="Slide 3" className="w-full sm:w-[440px] md:w-[500px]" />
      </div>
    </div>
  );
};

export default Component14;
