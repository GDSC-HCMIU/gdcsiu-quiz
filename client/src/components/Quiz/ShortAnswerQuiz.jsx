import React from 'react';

const ShortAnswerQuiz = ({ selectedOption, onChange, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Enter your answer as a short single sentence"
          type="text"
          value={selectedOption}
          onChange={onChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ShortAnswerQuiz;
