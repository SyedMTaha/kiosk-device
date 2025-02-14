import Component from './window-components/Component1';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import the left arrow icon
import Component1 from './window-components/Component1';
import Component2 from './window-components/Component2';
import Component3 from './window-components/Component3';
import Component4 from './window-components/Component4';
import Component5 from './window-components/Component5';
import Component6 from './window-components/Component6';
import Component7 from './window-components/Component7';
import Component8 from './window-components/Component8';
import Component9 from './window-components/Component9';
import Component10 from './window-components/Component10';
import Component11 from './window-components/Component11';
import Component12 from './window-components/Component12';
import Component13 from './window-components/Component13';
import Component14 from './window-components/Component14';
import Component15 from './window-components/Component15';
import Component16 from './window-components/Component16';
import Component17 from './window-components/Component17';



  
  const WindowsTypeByod = () => {

      const [counter, setCounter] = useState(1); // Counter state
      
        // Function to handle left icon click
        const handleLeftClick = () => {
          if (counter === 1) {
            navigate(-1); // Navigate back if counter is 1
          } else {
            setCounter(counter - 1); // Decrement counter
          }
        };
      
        // Function to handle right icon click
        const handleRightClick = () => {
          if (counter < 20) {
            setCounter(counter + 1); // Increment counter
          }
        };
      
        // Determine icon color based on counter value
        const iconColor = (counter === 1  || counter === 16) ? 'black' : 'black';
      
        // Map counter values to components
        const components = [
          Component1, Component2, Component3, Component4, Component5,
          Component6, Component7, Component8, Component9, Component10,
          Component11, Component12, Component13, Component14, Component15, Component16, Component17, 
        ];
      
        // Get the current component based on the counter
        const CurrentComponent = components[counter - 1];
      
     
        // Function to handle the back navigation
        const handleBackNavigation = () => {
          navigate(-1); // Navigate to the previous page
        };
      
        
      const navigate = useNavigate(); // Navigation hook
      
        return (
           <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-100 relative">
             {/* Left Icon */}
             {counter && (
               <div
                 className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-50"
                 onClick={handleLeftClick}
               >
                 <FaArrowLeft className={`w-8 h-8 ${iconColor === 'white' ? 'text-white' : 'text-black'}`} />
               </div>
             )}
       
             {/* Current Component */}
             <div className="w-full h-full flex justify-center items-center">
               <CurrentComponent />
             </div>
             {/* Right Icon */}
             {counter !== 20 && (
               <div
                 className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-50"
                 onClick={handleRightClick}
               >
                 <FaArrowRight className={`w-8 h-8 ${iconColor === 'white' ? 'text-white' : 'text-black'}`} />
               </div>
             )}
           </div>
         );
   
  
}

export default WindowsTypeByod
