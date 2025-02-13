// import React from 'react';
// import logo from '../../../assets/logo.png';

// const Component1 = () => {
//   return (
//     <div className="w-full h-screen bg-[#000F3C] flex flex-col justify-center items-center relative">
//       {/* Logo at Top Center */}
//       <div className="absolute top-4 sm:top-8">
//         <img src={logo} alt="Logo" className="w-8 sm:w-12 h-auto" /> {/* Responsive logo size */}
//       </div>

//       {/* Text at Center */}
//       <div className="text-center px-4"> {/* Added padding for small screens */}
//         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#B4FFFF]">
//           MacOS Device Enrollment
//         </h1>
//         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#B4FFFF]">
//           Guide for Intune (Preliminary)
//         </h1>
//         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#B4FFFF]">(How to Guide)</h1>
//       </div>

//       {/* Text at Bottom Left */}
//       <div className="absolute bottom-4 left-4 text-white text-sm sm:text-base md:text-lg">
//         telenor | shared services
//       </div>
//     </div>
//   );
// };

// export default Component1;


import React from 'react'
import logo from '../../../assets/logo.png';
const Component12 = () => {
  return (
    <div>
      

      <div className="absolute bottom-4 left-4 text-white text-sm sm:text-base md:text-lg">
        <img src={logo} alt="Logo" className="w-8 sm:w-10 h-auto" />
      </div>
    </div>
  )
}

export default Component12