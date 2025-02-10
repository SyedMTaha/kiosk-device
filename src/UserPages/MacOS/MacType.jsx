import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import the left arrow icon
import Banner from "../../assets/banner.png";
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import Component5 from './components/Component5';
import Component6 from './components/Component6';
import Component7 from './components/Component7';
import Component8 from './components/Component8';
import Component9 from './components/Component9';
import Component10 from './components/Component10';
import Component11 from './components/Component11';

const MacType = () => {
  

  // Function to handle the Customer Support card click
  const handleCustomerSupportClick = () => {
    window.open(
      "https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_MTRmODhjMDMtYjI4My00MjY5LWJiNWYtNDVmNjQzMWJiNTAy%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%25221676489c-5c72-46b7-ba63-9ab90c4aad44%2522%252c%2522Oid%2522%253a%2522035f12ea-f596-4c69-886f-9781318014fa%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=cd77a2fc-c431-4278-b94e-7a9589e53455&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true",
      "_blank" // Opens the link in a new tab
    );
  };

  const [counter, setCounter] = useState(1); // Counter state
  const navigate = useNavigate(); // Navigation hook

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
  const iconColor = (counter === 1 || counter === 2 || counter === 15) ? 'white' : 'black';

  // Map counter values to components
  const components = [
    Component1, Component2, Component3, Component4, Component5,
    Component6, Component7, Component8, Component9, Component10,
    Component11, 
  ];

  // Get the current component based on the counter
  const CurrentComponent = components[counter - 1];


 

  // Function to handle the back navigation
  const handleBackNavigation = () => {
    navigate(-1); // Navigate to the previous page
  };

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

};

export default MacType;