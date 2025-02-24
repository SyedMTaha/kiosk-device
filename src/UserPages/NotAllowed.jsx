import React from 'react'
import logo from "../assets/logo.png"; // Ensure the path to your logo is correct

const NotAllowed = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md w-full mx-4 border border-gray-100">
        {/* Logo at the top center */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="w-24 h-24" /> {/* Adjust size as needed */}
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Invalid Email</h1>
        <p className="text-gray-600 mb-6">Can't signin with your email! Contact IT Team</p>
        <button
          onClick={()=>{}}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
        >
          <span className="mr-2">Contact IT Team</span>
        </button>
      </div>
    </div>
  )
}

export default NotAllowed
