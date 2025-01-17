import React, { useState } from 'react';
import img from '../assets/login-img.png';
import logo from '../assets/logo.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords must match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-b from-[#ffe1e1] to-white flex items-center justify-center">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg">
        {/* Left Section with Image */}
        <div className="flex-1 p-6 flex justify-center items-center">
          <img src={img} alt="Signup" className="w-64 rounded-xl shadow-md" />
        </div>

        {/* Right Section with Form */}
        <div className="flex-1 p-8">
          <div className="absolute top-4 left-4">
            <img src={logo} alt="Logo" className="w-20 h-auto" />
          </div>
          <h2 className="text-[#143761] text-3xl font-semibold text-center mb-6">Create Account</h2>

          {/* Social Login Buttons */}
          <div className="flex gap-6 mb-6">
            <button className="flex items-center justify-center bg-[#3b5998] text-white py-2 px-4 rounded-md hover:bg-[#2d4373] focus:outline-none w-full">
              <FaFacebookF className="mr-2" /> Facebook
            </button>
            <button className="flex items-center justify-center bg-[#db4437] text-white py-2 px-4 rounded-md hover:bg-[#c1351d] focus:outline-none w-full">
              <FaGoogle className="mr-2" /> Google
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full border-b-2 border-[#143761] p-3 focus:outline-none focus:ring-0 text-sm"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border-b-2 border-[#143761] p-3 focus:outline-none focus:ring-0 text-sm"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                className="w-full border-b-2 border-[#143761] p-3 focus:outline-none focus:ring-0 text-sm"
                value={formData.password}
                onChange={handleChange}
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEyeSlash className="text-[#143761]" /> : <FaEye className="text-[#143761]" />}
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password Field */}
            <div className="relative">
              <input
                type={confirmPasswordVisible ? 'text' : 'password'}
                id="confirmPassword"
                placeholder="Confirm your password"
                className="w-full border-b-2 border-[#143761] p-3 focus:outline-none focus:ring-0 text-sm"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              >
                {confirmPasswordVisible ? <FaEyeSlash className="text-[#143761]" /> : <FaEye className="text-[#143761]" />}
              </div>
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* Signup Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#143761] text-white py-3 rounded-md hover:bg-[#0f2e48] focus:outline-none transition duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Login Link */}
          <p className="text-center mt-6 text-[#143761] text-sm">
            Already have an account?{' '}
            <a href="/login" className="font-semibold text-[#143761] hover:underline">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
