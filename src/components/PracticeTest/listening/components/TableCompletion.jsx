import React, { useState } from "react";

const TableCompletion = ({ dataset }) => {
    const questions = dataset[0]?.questions || [];
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [showAnswersModal, setShowAnswersModal] = useState(false); // State for controlling modal visibility

    // Count the total number of input fields dynamically
    const totalInputFields = questions.filter((question) =>
        question.text?.includes("_________")
    ).length;

    const handleInputChange = (id, value) => {
        setAnswers((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    // Check if all input fields have been answered
    const allAnswered = questions
        .filter((question) => question.text?.includes("_________"))
        .every((question) => answers[question.id]?.trim());

    const calculateScore = () => {
        let newScore = 0;

        questions.forEach((question) => {
            if (
                question.text?.includes("_________") &&
                question.correctOption?.some((option) =>
                    option.toLowerCase() === answers[question.id]?.trim().toLowerCase()
                )
            ) {
                newScore++;
            }
        });

        setScore(newScore);
        setFinished(true);
    };

    // Handle opening and closing of the answers modal
    const openAnswersModal = () => {
        setShowAnswersModal(true);
    };

    const closeAnswersModal = () => {
        setShowAnswersModal(false);
    };

    return (
        <div className="p-4 relative pb-16">
            <table className="table-auto border-collapse border border-gray-300 w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 p-4">LOCATION</th>
                        <th className="border border-gray-300 p-4">JOB TITLE</th>
                        <th className="border border-gray-300 p-4">RESPONSIBILITIES INCLUDED</th>
                        <th className="border border-gray-300 p-4">PAY AND CONDITIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {questions
                        .reduce((rows, question, index) => {
                            if (index % 4 === 0) rows.push([]);
                            rows[rows.length - 1].push(question);
                            return rows;
                        }, [])
                        .map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((question) => (
                                    <td
                                        key={question.id}
                                        className="border border-gray-300 p-4 text-left"
                                    >
                                        {question.text?.includes("_________") ? (
                                            <>
                                                {question.text.split("_________").map((part, i, arr) => (
                                                    <React.Fragment key={i}>
                                                        {part}
                                                        {i < arr.length - 1 && (
                                                            <input
                                                                type="text"
                                                                className="border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 mx-1"
                                                                value={answers[question.id] || ""}
                                                                placeholder="Type your answer"
                                                                onChange={(e) =>
                                                                    handleInputChange(question.id, e.target.value)
                                                                }
                                                            />
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </>
                                        ) : (
                                            question.text1 || question.text
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                </tbody>
            </table>

            {finished ? (
                <>
                    <div className="fixed bottom-4 right-4 space-x-4">
                        <button
                            className="px-6 py-3 rounded-lg text-white font-semibold bg-[#DB1738] hover:bg-[#C21530]"
                            onClick={() => {
                                setFinished(false);
                                setScore(0);
                                setAnswers(
                                    questions.reduce((acc, question) => {
                                        acc[question.id] = ""; // Reset inputs
                                        return acc;
                                    }, {})
                                );
                            }}
                        >
                            Retry
                        </button>
                    </div>
                    <div className="fixed bottom-4 left-4 bg-[#DB1738] font-semibold text-white px-6 py-3 rounded-lg">
                        Score: {score} / {totalInputFields}
                    </div>

                    {/* View Answers Link */}
                    <div className="fixed bottom-7 left-[12vw] text-xl font-semibold text-blue-600 cursor-pointer">
                        <span
                            className="underline"
                            onClick={openAnswersModal}
                        >
                            View Answers
                        </span>
                    </div>
                </>
            ) : (
                <button
                    className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg text-white font-semibold shadow-lg ${allAnswered
                        ? "bg-[#DB1738] hover:bg-[#C21530]"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!allAnswered}
                    onClick={calculateScore}
                >
                    Finish
                </button>
            )}

            {/* Modal for Viewing Answers */}
            {showAnswersModal && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg max-w-xl w-full">
                        <h2 className="text-2xl font-semibold mb-4">Answers</h2>
                        <ul className="space-y-4">
                            {questions
                                .filter((question) => question.text?.includes("_________"))
                                .map((question) => (
                                    <li key={question.id}>
                                        <strong>Question {question.id}:</strong> 
                                        <span className="ml-2 text-black">
                                            {question.correctOption.join(", ")}
                                        </span>
                                    </li>
                                ))}
                        </ul>
                        <button
                            className="mt-4 px-6 py-3 rounded-lg text-white font-semibold bg-[#DB1738] hover:bg-[#C21530]"
                            onClick={closeAnswersModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TableCompletion;
