import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");

  const handleContinue = () => {
    if (email) {
      alert(`Email entered: ${email}`);
      // Add your logic for handling the email submission here
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to the KIOSK</h1>
        <p className="text-gray-600 mb-6">Please enter your email to continue</p>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
        />
        <button
          onClick={handleContinue}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default App;