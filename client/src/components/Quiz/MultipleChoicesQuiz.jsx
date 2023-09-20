import React from 'react';
import Option from './Option';

const MultipleChoicesQuiz = ({
  question,
  selectedOption,
  onOptionChange,
  onSubmit,
}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Option
          options={question.option}
          selectedOption={selectedOption}
          onOptionChange={onOptionChange}
        />
        <button
          className="bg-slate-800 text-white px-4 py-1 rounded-lg w-fit hover:bg-slate-200 hover:text-black"
          type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MultipleChoicesQuiz;
