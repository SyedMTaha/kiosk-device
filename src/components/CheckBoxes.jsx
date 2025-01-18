const CheckBoxes = ({ questionId, options, selectedAnswers, correctOption, onChange, showResults }) => {
  // Get the selected answer for the current question
  const selectedAnswer = selectedAnswers[questionId]; // The answer is stored as a string per question
  console.log(questionId);
  console.log(selectedAnswers)

  const handleOptionChange = (option) => {
    onChange(questionId, option); // Update the selected answer for the specific question
  };

  return (
    <div className="space-y-4">
      {options.map((option, idx) => {
        // console.log(idx)
        // Check if the current option is selected
        const isChecked = selectedAnswer === option;

        const optionClass = showResults
          ? correctOption.includes(option)
            ? "font-bold text-green-600" // Correct answer
            : selectedAnswer === option
            ? "font-bold text-red-600" // Incorrect answer
            : "text-gray-800"
          : "text-gray-800";

        return (
          <div key={idx} className="flex items-center">
            <input
              type="radio" // Use radio buttons for single selection per question
              name={`question-${questionId}`} // Ensure only one option can be selected per question
              id={`question-${questionId}-option-${idx}`}
              className={`mr-3 ${showResults ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={showResults} // Disable radio buttons after submission
              checked={isChecked} // Mark the radio button as checked if selectedAnswer matches the current option
              onChange={() => handleOptionChange(option)} // Update the state with the selected option
            />
            <label
              htmlFor={`question-${questionId}-option-${idx}`}
              className={optionClass}
            >
              {option}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default CheckBoxes;
