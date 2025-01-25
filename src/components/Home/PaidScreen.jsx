import React, { useEffect, useState } from 'react';
import listening from '../../assets/listening.png';
import writing from '../../assets/writing.png';
import speaking from '../../assets/speaking.png';
import reading from '../../assets/reading.png';
import { useNavigate } from 'react-router-dom';

const PaidScreen = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [writingTab, setWritingTab] = useState('Task 1');
    const [selectedOption, setSelectedOption] = useState("");
    const navigate = useNavigate();

    const openModal = (title) => {
        setModalTitle(title);
        setSelectedOption(getOptions(title)[0]);
        console.log(selectedOption);
        setModalOpen(true);
    };

    // useEffect(()=>{
    //     setSelectedOption(getOptions(modalTitle)[0]);
    // },[openModal])

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleNextButton = () => {
        setModalOpen(false);
        const type = selectedOption
            .toLowerCase()
            .replace(/\s+/g, '-') // Remove spaces
            .replace(/\//g, '-'); // Replace '/' with '-'
        navigate(`/paiduser/${modalTitle.toLowerCase()}/${type}`);
    };


    const getOptions = (title) => {
        const options = {
            Reading: [
                'List of Headings',
                'True/False/Not Given',
                'Yes/No/Not Given',
                'Matching Information',
                'Sentence Completion',
                'Choose the Ending',
                'Labelling Diagram',
                "MCQ's - Choose One Letter",
                "MCQ's - Choose Two Letters",
                "Summary Completion 1",
                "Summary Completion 2",
                "matching statement with names",
                "table completion"
            ],
            Listening: [
                'Complete Notes',
                'Choose mcqs part-3',
                'Choose mcqs part-2',
                "Matching Box's Information",
                'Summary completion',
                "Table completion",
                "Maps",
            ],
            Speaking: [
                'Pronunciation',
                'Grammar Range',
                'Vocabulary Range',
                'Fluency and Coherence',
            ],
            Writing: writingTab === 'Task 1'
                ? [
                    'Bar Chart',
                    'Process Diagram (One Way/Two Way)',
                    'Pie Chart',
                    'Maps',
                    'Line Graph',
                    'Mixed Chart',
                    'Tables',
                ]
                : [
                    'Agree/Disagree',
                    'Problems and Solutions',
                    'Discuss Both Views',
                    'Advantage Outweigh Disadvantage',
                    'Positive or Negative Development',
                    'Two Parts Questions',
                ],
        };
        return options[title] || [];
    };

    return (
        <div className="min-h-screen bg-[#FFEEEE] flex flex-col items-center py-12 px-4">
            {/* Heading */}
            <h1 className="text-4xl font-extrabold text-[#1A1A1A] mb-12">Lectures</h1>

            {/* Cards Section */}
            <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
                {/* Listening Card */}
                <div
                    className="flex flex-col items-center bg-white border-[2px] border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
                    onClick={() => openModal('Listening')}
                >
                    <img src={listening} alt="Listening" className="w-28 h-28 mb-6" />
                    <p className="text-xl font-semibold text-[#143761]">Listening</p>
                </div>

                {/* Writing Card */}
                <div
                    className="flex flex-col items-center bg-white border-[2px] border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
                    onClick={() => openModal('Writing')}
                >
                    <img src={writing} alt="Writing" className="w-28 h-28 mb-6" />
                    <p className="text-xl font-semibold text-[#143761]">Writing</p>
                </div>

                {/* Speaking Card */}
                <div
                    className="flex flex-col items-center bg-white border-[2px] border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
                    onClick={() => openModal('Speaking')}
                >
                    <img src={speaking} alt="Speaking" className="w-28 h-28 mb-6" />
                    <p className="text-xl font-semibold text-[#143761]">Speaking</p>
                </div>

                {/* Reading Card */}
                <div
                    className="flex flex-col items-center bg-white border-[2px] border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
                    onClick={() => openModal('Reading')}
                >
                    <img src={reading} alt="Reading" className="w-28 h-28 mb-6" />
                    <p className="text-xl font-semibold text-[#143761]">Reading</p>
                </div>
            </div>

            {/* Mock Tests Section */}
            <div className="mt-16 text-center">
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">Mock Tests</h2>
                <a
                    href="/mocktests"
                    className="inline-block text-lg font-semibold text-white bg-gradient-to-r from-[#143761] to-[#2A5298] py-4 px-10 rounded-sm shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                >
                    Explore Mock Tests
                </a>
            </div>

            {/* Modal */}
            {modalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-lg shadow-lg max-w-md w-full p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Heading */}
                        <div
                            className={`text-left p-4 rounded-t-lg ${modalTitle === 'Listening' || modalTitle === 'Speaking'
                                    ? 'bg-[#DB1738]'
                                    : 'bg-[#143761]'
                                } text-white text-xl font-bold`}
                        >
                            {modalTitle}
                        </div>

                        {/* Tab Buttons for Writing */}
                        {modalTitle === 'Writing' && (
                            <div className="flex justify-around mt-4">
                                <button
                                    className={`px-10 py-3 rounded-sm border border-gray-300 ${writingTab === 'Task 1' ? 'bg-gray-800 text-white' : 'bg-white text-black'
                                        }`}
                                    onClick={() => setWritingTab('Task 1')}
                                >
                                    Writing Task 1
                                </button>
                                <button
                                    className={`px-10 py-3 rounded-sm border border-gray-300 ${writingTab === 'Task 2' ? 'bg-gray-800 text-white' : 'bg-white text-black'
                                        }`}
                                    onClick={() => setWritingTab('Task 2')}
                                >
                                    Writing Task 2
                                </button>
                            </div>
                        )}

                        {/* Select Dropdown */}
                        <div className="mt-6">
                            <label htmlFor="selectOption" className="text-gray-700 font-medium">
                                Choose an option:
                            </label>
                            <select
                                id="selectOption"
                                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1894E1]"
                                onChange={(e) => setSelectedOption(e.target.value)}
                            >
                                {getOptions(modalTitle).map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Buttons */}
                        <div className="mt-6 flex justify-end gap-4">
                            <button
                                className="px-6 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 transition-transform transform hover:scale-105"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            <button className="px-6 py-2 text-white bg-[#1894E1] rounded-lg hover:bg-[#1272b5] transition-transform transform hover:scale-105" onClick={handleNextButton}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PaidScreen;
