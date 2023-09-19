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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MultipleChoicesQuiz;
