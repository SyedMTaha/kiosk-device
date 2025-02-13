import React from 'react'
import logo from '../../../assets/logo.png';
import slide9 from '../../Byod/window-assets/slide9.png';
import slide9_2 from '../../Byod/window-assets/slide9-2.png';

const Component9 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 relative ">
      
      <div className="md:w-1/2 w-full text-center font-medium md:text-left text-lg  ">      
        <p className=" mt-2 font-normal  text-black"> 
            17. Hit the  <span className='font-semibold'> 'Done' </span> button and you are good to go!        
        </p>

        <p className=" mt-2 font-normal  text-black"> 
          18. As you can on the screen dump to the right, a connection is now established.         
        </p>
    </div>

    {/* Right Panel (Image) */}
    <div className="md:w-1/2 w-full flex flex-col justify-center items-center space-y-8 mt-auto md:mt-0  ">
      <img src={slide9} alt="Policy Table 1" className="w-full md:w-[90%] h-auto shadow-lg" />
      <img src={slide9_2} alt="Policy Table 2" className="w-full md:w-[90%] h-auto shadow-lg " />
    </div>

      <div className="absolute bottom-4 left-4 text-white text-sm sm:text-base md:text-lg">
        <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
      </div>
    </div>
  )
}

export default Component9