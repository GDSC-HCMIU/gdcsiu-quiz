import React from 'react';

const ShortAnswerQuiz = ({ selectedOption, onChange, onSubmit }) => {
  return (
    <div>
      <form className="grid-rows-3 w-sm max-w-lg text-lg" onSubmit={onSubmit}>
        <input
          className="rounded-lg w-md border-0 focus:border-0"
          placeholder="Enter your answer as a short single sentence"
          type="text"
          value={selectedOption}
          onChange={onChange}
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

export default ShortAnswerQuiz;
