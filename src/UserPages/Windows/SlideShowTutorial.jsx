import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 
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
import Component12 from './components/Component12';
import Component13 from './components/Component13';
import Component14 from './components/Component14';
import Component15 from './components/Component15';
import Component16 from './components/Component16';
import Component17 from './components/Component17';
import Component18 from './components/Component18';
import Component19 from './components/Component19';

const SlideShowTutorial = () => {
  const [counter, setCounter] = useState(1); // Counter state
  const navigate = useNavigate(); // Navigation hook

  // Retrieve counter from localStorage on component mount
  useEffect(() => {
    const savedCounter = localStorage.getItem('slideCounter');
    if (savedCounter) {
      setCounter(parseInt(savedCounter, 10)); // Set the counter from localStorage
    }
  }, []);

  // Save counter to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('slideCounter', counter.toString());
  }, [counter]);

  // Function to handle left icon click
  const handleLeftClick = () => {
    if (counter === 1) {
      navigate(-1); // Navigate back if counter is 1
    } else {
      setCounter((prevCounter) => prevCounter - 1); // Decrement counter
    }
  };

  // Function to handle right icon click
  const handleRightClick = () => {
    if (counter < 19) {
      setCounter((prevCounter) => prevCounter + 1); // Increment counter
    }
  };

  // Determine icon color based on counter value
  const iconColor = (counter === 1 || counter === 2 || counter === 19) ? 'white' : 'black';

  // Map counter values to components
  const components = [
    Component1, Component2, Component3, Component4, Component5,
    Component6, Component7, Component8, Component9, Component10,
    Component11, Component12, Component13, Component14, Component15,
    Component16, Component17, Component18, Component19
  ];

  // Get the current component based on the counter
  const CurrentComponent = components[counter - 1];

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
      {counter !== 19 && (
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

export default SlideShowTutorial;