import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import speaking from "../../assets/speaking.png";
import ArrowIcon from "../ArrowIcon";

const Speaking = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#ffe1e1] to-white font-sans">
        <header>
          <Navbar />
        </header>

        {/* Page Content */}
        <main className="mt-20 container flex flex-col items-center justify-center mx-auto p-4">
          {/* Header Section */}
          <section className="mt-5 flex flex-col md:flex-row items-center mb-8">
            <img
              src={speaking}
              alt="Speaking"
              className="w-32 h-32 md:w-40 md:h-40"
            />
            <h1 className="mt-4 md:mt-0 md:ml-5 text-3xl md:text-4xl font-bold text-gray-800 uppercase text-center">
              Speaking
            </h1>
          </section>

          {/* Video Section */}
          <div className="mt-2 flex bg-pink-200 p-4 w-full max-w-4xl border-solid rounded-xl">
            <iframe
              className="w-full h-64 md:h-96"
              src="https://www.youtube.com/embed/EKcqMrtx2yU?si=x6cE8HZjd5x2SdVZ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Mock Test Section */}
          <section className="mt-10 flex flex-col md:flex-row items-center rounded-lg p-6 mx-auto max-w-4xl space-y-6 md:space-y-0 md:space-x-6">
  {/* Image Section */}
  <div className="w-full md:w-1/2 h-full rounded-lg shadow-md flex bg-blue-50 items-center justify-center">
    <img
      src="" // Replace with the test icon path
      alt="Mock Test Icon"
      className="w-[248px] h-[279px]" // Used these parameters from Figma design
    />
  </div>

  {/* Text Section */}
  <div className="w-full md:w-1/2 flex flex-col justify-between text-center md:text-left">
    {/* Heading */}
    <h2 className="text-3xl font-bold text-gray-800 mb-6">
      MOCK TEST
    </h2>

    {/* Paragraph */}
    <p className="text-gray-600 mb-6">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
      velit natus maiores mollitia. Voluptate, et adipisci eveniet laboriosam
      ipsum quia quisquam placeat dicta aperiam sed, beatae facilis, dolores
      doloremque accusantium.
    </p>

    {/* Start Test Button */}
    <div className="mt-4">
      <button className="bg-[#DB1738] text-white font-semibold text-sm px-6 py-4 rounded-full inline-flex items-center gap-2 hover:bg-red-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#DB1738]">
        START TEST
        <span>
          <ArrowIcon bgColor="#DB1738" />
        </span>
      </button>
    </div>
  </div>
</section>

          {/* Mock Test Task */}
          <section className="mt-20 mx-auto w-full max-w-4xl mb-20">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              {/* Header */}
              <div className="bg-[#DB1738] text-white px-6 py-6 flex justify-between items-center rounded-t-lg">
                <h3 className="font-semibold text-lg uppercase">Mock Test</h3>
                <span className="text-sm bg-[#Db1738] px-3 py-1 rounded-md border-white border-2 border-opacity-70">
                  40:00
                </span>
              </div>

              {/* Content */}
              <div className="px-6 py-8 grid gap-8 text-center">
                {/* Audio Waveform Placeholder */}
                <div className="bg-gray-200 h-24 w-full rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">
                    [Audio Waveform Placeholder]
                  </span>
                </div>

                {/* Audio Buttons */}
                <div className="flex justify-center gap-6">
                  {/* Play Button */}
                  <button className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-4.586-3.294A1 1 0 009 8.53v6.94a1 1 0 001.166.93l4.586-1.294a1 1 0 00.748-.93v-3.147z"
                      />
                    </svg>
                  </button>

                  {/* Record Button */}
                  <button className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m0 0a3 3 0 100 6m0-6a3 3 0 100-6m0 0v-2m0 4a3 3 0 100 6m0-6a3 3 0 100-6V9a3 3 0 10-6 0v3a3 3 0 106 0z"
                      />
                    </svg>
                  </button>

                  {/* Timer Button */}
                  <button className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m-3-9a8 8 0 100 16 8 8 0 000-16z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Finish Button */}
              <div className="flex justify-end px-10 pb-10">
                <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-200 focus:outline-none">
                  Finish
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Speaking;
