import React, { useState } from "react";
import logo from "../assets/logo.png"; // Ensure the path to your logo is correct
import { useNavigate } from "react-router-dom";

function Main() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const allowedEmail = ["Syed.fahad1@telenor.com"];

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleContinue = () => {
    if (validateEmail(email)) {
      if (allowedEmail.includes(email)) {
        // Start the loading process
        setLoading(true);

        // Simulate data fetching and device verification
        setTimeout(() => {
          // After the "loading", navigate to the select device page
          navigate('/select-device');
        }, 3000); // 3 seconds delay for simulation
      } else {
        navigate('/not-allowed');
      }
    } else {
      setIsValidEmail(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-green-500 mx-auto mb-4"></div>
          <p className="text-xl font-semibold text-gray-800">Fetching data from the user...</p>
          <p className="text-lg text-gray-600 mt-4">Verifying your device...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md w-full mx-4 border border-gray-100">
        {/* Logo at the top center */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="w-24 h-24" /> {/* Adjust size as needed */}
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Diversity</h1>
        <p className="text-gray-600 mb-6">Please enter your email to continue</p>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setIsValidEmail(true); // Reset validation on change
          }}
          className={`w-full px-4 py-3 border ${isValidEmail ? "border-gray-300" : "border-red-500"
            } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4 text-gray-700 placeholder-gray-400`}
        />
        {!isValidEmail && (
          <p className="text-red-500 text-sm mb-4">Please enter a valid email address.</p>
        )}
        <button
          onClick={handleContinue}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
        >
          <span className="mr-2">Continue</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Main;
