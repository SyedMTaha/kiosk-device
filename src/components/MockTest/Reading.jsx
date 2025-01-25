import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import reading from '../../assets/reading.png';
import ArrowIcon from "../ArrowIcon";
import TestComponent from "../PracticeTest/reading/ReadingTestComponent";
import { useLocation } from "react-router-dom";
import db from '../../lib/firebase';
import { doc, getDoc } from "firebase/firestore";

const Reading = () => {
  const location = useLocation(); // Get location object
  const [sampleQuestions, setSampleQuestions] = useState(null);
  const [loading, setLoading] = useState(true); // For loading state

  useEffect(() => {
    // Extract the pathname and remove the leading '/'
    const collectionPath = location.pathname.replace(/^\//, ""); 
    // Fetch questions from Firestore
    const fetchQuestions = async () => {
      try {
        const questionsRef = doc(db, 'questions', collectionPath); // Adjust for your Firestore structure
        const userDoc = await getDoc(questionsRef);

        if (userDoc.exists) {
          setSampleQuestions(userDoc.data().questions); // Assuming `questions` field contains the data
        } else {
          console.error(`No document found at questions/${collectionPath}`);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false); // End loading state
      }
    };

    fetchQuestions();
  }, [location.pathname]);

  if (loading) {
    return <div>Loading...</div>; // Display a loading state
  }

  if (!sampleQuestions) {
    return <div>No questions available.</div>; // Display an error state if no questions are available
  }

  return (
    <>
      <div className="h-full bg-gradient-to-b from-[#ffe1e1] to-white font-sans">
        <header>
          <Navbar />
        </header>

        {/* Page Content */}
        <main className="mt-20 container flex flex-col items-center justify-center min-h-screen mx-auto p-4">
          {/* Header Section */}
          <section className="flex flex-col sm:flex-row items-center text-center sm:text-left mt-5 mb-8">
            <img
              src={reading}
              alt="Reading Icon"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
            />
            <h1 className="ml-0 sm:ml-5 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 uppercase mt-4 sm:mt-0">
              Reading
            </h1>
          </section>

          {/* Video Section */}
          <div className="mt-2 flex bg-blue-50 p-4 mx-auto w-full max-w-4xl rounded-xl">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/EKcqMrtx2yU?si=x6cE8HZjd5x2SdVZ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>

          {/* Mock Test Section */}
          <section className="mt-10 flex flex-col md:flex-row items-center rounded-lg p-6 mx-auto max-w-4xl space-y-6 md:space-y-0 md:space-x-6">
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-full rounded-lg shadow-md flex bg-blue-50 items-center justify-center">
              <img
                src="" // Replace with the test icon path
                alt="Mock Test Icon"
                className="w-[248px] h-[279px]" // Consistent size with Figma design
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
                <button className="bg-[#143761] text-white font-semibold text-sm px-6 py-4 rounded-full inline-flex items-center gap-2 hover:bg-[#0c2a3b] transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#143761]">
                  START TEST
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </section>

          {/* Mock Test Questions Section */}
          <section className="mt-20 mx-auto w-full max-w-4xl mb-20">
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex">
              {/* Left Side: Passage */}
              <div className="w-1/2 p-6 bg-[#f5f5f5] overflow-auto">
                <h3 className="font-semibold text-2xl text-gray-800 mb-4">Passage Heading</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia quam at arcu tincidunt, ac suscipit velit sodales. Duis ac laoreet lectus. Nulla facilisi.
                </p>
                <p className="text-gray-600">
                  Mauris egestas, libero et fringilla tempus, tortor turpis gravida turpis, at condimentum neque nulla ac lorem. Sed imperdiet justo a nisl gravida, in suscipit nulla vestibulum.
                </p>
              </div>

              {/* Right Side: TestComponent */}
              <div className="w-1/2 p-6 bg-white overflow-auto h-96">
                <div className="sticky top-0 bg-white z-10 py-2 px-4">
                  <h3 className="text-lg font-semibold text-[#143761]">Mock Test</h3>
                  <span className="text-sm bg-[#143761] text-white px-3 py-1 rounded-md border-white border-2 border-opacity-70 mr-4">
                    40:57:00
                  </span>
                </div>
                <div className="overflow-y-auto h-full">
                  <TestComponent questions={sampleQuestions} buttonColor="bg-[#143761] hover:bg-[#0c2a3b]" />
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Reading;
