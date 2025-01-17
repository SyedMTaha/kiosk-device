const CheckBoxes = ({ questionId, options, selectedAnswers, correctOption, onChange, showResults }) => {
  // Get the selected answer for the current question (only one can be selected)
  const selectedAnswer = selectedAnswers[questionId];

  return (
    <div className="space-y-4">
      {options.map((option, idx) => {
        // Check if the current option is selected (only one option can be selected per question)
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
              type="radio" // Changed from checkbox to radio button
              name={`question-${questionId}`} // Ensure only one option can be selected for each question
              id={`question-${questionId}-option-${idx}`}
              className={`mr-3 ${showResults ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={showResults} // Disable radio buttons after submission
              checked={isChecked} // Only one radio button can be checked at a time
              onChange={() => onChange(questionId, option)} // Trigger the state change for that question
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
