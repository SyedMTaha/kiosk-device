
const SelectSingleOptions = ({ questionId, options, selectedAnswer, onChange, showResults }) => {
  return (
    <div className="mb-4">
      <select
        value={selectedAnswer || ""}
        onChange={(e) => onChange(questionId, e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 w-full"
        disabled={showResults}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectSingleOptions;