import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import writing from "../../assets/writing.png";
import ArrowIcon from "../ArrowIcon";

const Writing = () => {
  return (
    <>
      <div className="h-full bg-gradient-to-b from-[#ffe1e1] to-white font-sans">
        <header>
          <Navbar />
        </header>

        {/* Page Content */}
        <main className="mt-20 container flex flex-col items-center justify-center min-h-screen mx-auto p-4">
          {/* Writing Header */}
          <section className="flex flex-col sm:flex-row items-center text-center sm:text-left mt-5 mb-8">
            <img
              src={writing}
              alt="Writing Icon"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
            />
            <h1 className="ml-0 sm:ml-5 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 uppercase mt-4 sm:mt-0">
              Writing
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
                className="w-[248px] h-[279px]"
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit velit natus maiores mollitia. Voluptate, et
                adipisci eveniet laboriosam ipsum quia quisquam placeat dicta
                aperiam sed, beatae facilis, dolores doloremque accusantium.
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

          {/* Mock Test Task Section */}
          <section className="mt-20 mx-auto max-w-4xl mb-20">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              {/* Header */}
              <div className="bg-[#143761] text-white px-6 py-6 flex justify-between items-center rounded-t-lg">
                <h3 className="font-semibold text-lg uppercase">Mock Test</h3>
                <span className="text-sm bg-[#143761] px-3 py-1 rounded-md border-white border-2 border-opacity-70 mr-4">
                  40:57:00
                </span>
              </div>

              {/* Content */}
              <div className="px-6 py-8 space-y-12 md:space-y-0 md:flex md:gap-6">
                {/* Task Description */}
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 text-lg mb-4 uppercase">
                    Task 1
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum vestibulum. Cras
                    venenatis euismod malesuada. Sed convallis elit sit amet
                    nibh pellentesque, in congue metus mollis. Aliquam erat
                    volutpat. Ut volutpat sapien vel lectus pulvinar, id
                    molestie arcu condimentum.
                  </p>
                </div>

                {/* Answer Box */}
                <div className="flex-1 mt-8">
  <textarea
    placeholder="Write your answer here..."
    className="w-full min-h-[150px] border border-gray-300 rounded-xl p-4 focus:outline-none focus:border-[#143761] resize-none"
  ></textarea>
  <div className="flex justify-end mt-4">
    <button className="bg-[#143761] text-white px-6 py-2 rounded-full hover:bg-[#0c2a3b] transition duration-200 focus:outline-none">
      Next
    </button>
  </div>
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

export default Writing;
