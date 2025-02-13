import React from 'react';
import img from '../images/slide 17.png';

const Component17 = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen w-full">
      <div className="w-full sm:w-[30vw] flex flex-col items-center  sm:pl-16 md:pl-20">
        <div className="flex flex-col gap-4 text-center sm:text-left text-[#000F3C]">
          <h1 className="font-semibold  text-3xl sm:text-4xl md:text-5xl">Device Setup</h1>
          <ul className="list-disc text-lg sm:text-xl space-y-6 pl-4">
              <li>Open the Windows search bar and type "update." Click on "Check for updates" and wait for the results. If there are any updates available, click "Download and install." Follow the on-screen prompts to proceed with the installation. You might be asked to restart your computer several times during the update process. Keep restarting as required until all updates are installed.</li> 
              <li>During this process open“Company Portal”</li>
          </ul>
        </div>
      </div>
      <div className="w-full sm:w-[70vw] flex justify-center items-center mt-8 sm:mt-0">
        <img src={img} alt="Slide 3" className="w-full sm:w-[440px] md:w-[500px]" />
      </div>
    </div>
  );
};

export default Component17;
