import React from 'react';
import img from '../images/slide 18.png';

const Component18 = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen w-full">
      <div className="w-full sm:w-[30vw] flex flex-col items-center  sm:pl-16 md:pl-20">
        <div className="flex flex-col gap-4 text-center sm:text-left text-[#000F3C]">
          <h1 className="font-semibold  text-3xl sm:text-4xl md:text-5xl">Device Setup</h1>
          <ul className="list-disc text-lg sm:text-xl space-y-6 pl-4">
              <li>Open the Company Portal and sign in. You'll be asked to choose a device category—select "Corporate Dedicated Device." Then, go to settings to sync your device, and you're all set.</li> 
              <li>Once your Windows is fully updated, after several restarts, and your device is synced, you'll be ready to use it.</li>
              <li>Good Luck!</li>
          </ul>
        </div>
      </div>
      <div className="w-full sm:w-[70vw] flex justify-center items-center mt-8 sm:mt-0">
        <img src={img} alt="Slide 3" className="w-full sm:w-[440px] md:w-[500px]" />
      </div>
    </div>
  );
};

export default Component18;
