import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ArrowIcon from "../ArrowIcon";
import listening from "../../assets/listening.png"
import TestComponent from "../TestComponent";


const Listening = ({sampleQuestions}) => {
  return (
    <>
      <div className="h-full bg-gradient-to-b from-[#ffe1e1] to-white font-sans">
        <header>
          <Navbar />
        </header>
        
 {/* Page Content */}
 <main className="mt-20 container flex flex-col items-center justify-center min-h-screen mx-auto p-4">
  {/* Writing Section */}
  <section className=" mt-5 flex  items-center mb-8">
    
  <img src={listening} alt="pic" />
  <h1 className="ml-5 text-4xl font-bold text-gray-800 uppercase text-center">
    Listening
  </h1>
</section>
  
  <div className="mt-2 flex bg-pink-200 p-4 mx-auto w-full max-w-4xl border-solid rounded-xl">
    <iframe
      width="100%"
      height="500"
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

          {/* Mock Test Section */}
          <section className="mt-20 mx-auto w-full max-w-4xl mb-20">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              {/* Header */}
              <div className="bg-[#DB1738] text-white px-6 py-6 flex justify-between items-center rounded-t-lg">
                <h3 className="font-semibold text-lg uppercase">Mock Test</h3>
                <span className="text-sm bg-[#Db1738] px-3 py-1 rounded-md border-white border-2 border-opacity-70 mr-4">
                  40:00
                </span>
              </div>

              {/* Audio Wave Section */}
              <div className="bg-red-50 px-6 py-8 flex items-center justify-between">
                <div className="w-full bg-gray-300 h-10 rounded-md flex items-center justify-center">
                  <span className="text-gray-500">[Audio Wave Placeholder]</span>
                </div>
                <span className="ml-4 text-lg font-semibold text-gray-600">
                  40:00
                </span>
              </div>

              {/* Questions Section */}
              <TestComponent questions={sampleQuestions} buttonColor="bg-[#DB1738] hover:bg-red-700"/>

      
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Listening;