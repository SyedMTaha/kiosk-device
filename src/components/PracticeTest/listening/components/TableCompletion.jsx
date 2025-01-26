import React, { useState } from "react";

const TableCompletion = ({ dataset }) => {
    const questions = dataset[0]?.questions || [];
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

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
                </>
            ) : (
                <button
                    className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg text-white font-semibold shadow-lg ${
                        allAnswered
                            ? "bg-[#DB1738] hover:bg-[#C21530]"
                            : "bg-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!allAnswered}
                    onClick={calculateScore}
                >
                    Finish
                </button>
            )}
        </div>
    );
};

export default TableCompletion;
