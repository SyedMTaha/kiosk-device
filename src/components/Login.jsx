import React, { useState } from 'react';
import img from '../assets/login-img.png';
import logo from '../assets/logo.png';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa'; 
import { auth } from '../lib/firebase'; // Ensure Firebase is initialized in a separate file
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useUser } from '../context/context';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const {setUser}=useUser();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        general: ''
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
        if (!formData.email) newErrors.email = 'Email is required';
        if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
                const user = userCredential.user; // Get the signed-in user details
                setUser(user); // Set the user in the context
                console.log('Login successful');
            } catch (error) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    general: error.message
                }));
            }
        }
    };
    
    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user; // Get the signed-in user details
            setUser(user); // Set the user in the context
            console.log('Google Sign-In successful');
        } catch (error) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                general: error.message
            }));
        }
    };    

    return (
        <div className="h-screen bg-gradient-to-b from-[#ffe1e1] to-white flex items-center justify-center">
            <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg">
                {/* Left Section with Image */}
                <div className="flex-1 p-6 flex justify-center items-center">
                    <img src={img} alt="Login" className="w-64 rounded-lg shadow-md" />
                </div>

                {/* Right Section with Form */}
                <div className="flex-1 p-8">
                    <div className="absolute top-4 left-4">
                        <img src={logo} alt="Logo" className="w-16 h-auto" />
                    </div>
                    <h2 className="text-[#143761] text-3xl text-center font-semibold mb-6">Login</h2>

                    {/* Social Media Buttons */}
                    <div className="flex gap-6 mb-6 justify-center">
                        <button
                            type="button"
                            onClick={handleGoogleSignIn}
                            className="flex items-center justify-center bg-[#db4437] text-white py-2 px-6 rounded-md hover:bg-[#c1351d] focus:outline-none transition duration-300 w-full max-w-xs"
                        >
                            <FaGoogle className="mr-2" /> Google
                        </button>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Field */}
                        <div>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full border-b-2 border-[#143761] p-3 focus:outline-none focus:ring-0 bg-transparent text-[#143761] placeholder:text-[#143761] font-medium"
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
                                className="w-full border-b-2 border-[#143761] p-3 focus:outline-none focus:ring-0 bg-transparent text-[#143761] placeholder:text-[#143761] font-medium"
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

                        {/* Login Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-[#143761] text-white py-3 rounded-md hover:bg-[#0f2e48] focus:outline-none transition duration-300"
                            >
                                Login
                            </button>
                        </div>

                        {/* General Error */}
                        {errors.general && <p className="text-red-500 text-sm mt-4 text-center">{errors.general}</p>}
                    </form>

                    {/* Links */}
                    <div className="mt-6 text-center">
                        <p className="text-[#143761] text-sm">
                            <a href="/forgot-password" className="font-semibold text-[#143761] hover:underline">Forgot Password?</a>
                        </p>
                        <p className="text-[#143761] text-sm mt-2">
                            I am new here,{' '}
                            <a href="/signup" className="font-semibold text-[#143761] hover:underline">Register here</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
