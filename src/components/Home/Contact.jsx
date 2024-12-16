import React from 'react'

const Contact = () => {
  return (
    <div className="h-screen flex bg-[#F9FAFB] px-6 md:px-16 py-12">
      {/* Left Section: Contact Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center pr-6 md:pr-12">
        {/* Heading */}
        <h1 className="text-3xl font-semibold text-[#1A1A1A] mb-6">Contact Us</h1>

        {/* Form */}
        <form className="space-y-5">
          {/* Name Field */}
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB1738] shadow-sm text-sm"
            />
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB1738] shadow-sm text-sm"
            />
          </div>

          {/* Message Field */}
          <div>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB1738] shadow-sm text-sm"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#DB1738] text-white text-lg font-semibold py-3 rounded-md hover:bg-[#B3132A] transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Right Section: Information */}
      <div className="w-full md:w-1/2 flex flex-col justify-center pl-6 md:pl-12">
        {/* Get a Demo */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#1A1A1A] mb-2">Get a Demo</h2>
          <p className="text-[#4A4A4A] text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed convallis elit sit amet nibh pellentesque, in congue.
          </p>
          <hr className="mt-4 border-t border-[#E5E7EB]" />
        </div>

        {/* Mail Us */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#1A1A1A] mb-2">Mail Us</h2>
          <p className="text-[#4A4A4A] text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed convallis elit sit amet nibh pellentesque, in congue.
          </p>
          <hr className="mt-4 border-t border-[#E5E7EB]" />
        </div>

        {/* Visit Us */}
        <div>
          <h2 className="text-xl font-semibold text-[#1A1A1A] mb-2">Visit Us</h2>
          <p className="text-[#4A4A4A] text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed convallis elit sit amet nibh pellentesque, in congue.
          </p>
          <hr className="mt-4 border-t border-[#E5E7EB]" />
        </div>
      </div>
    </div>
  )
}

export default Contact
