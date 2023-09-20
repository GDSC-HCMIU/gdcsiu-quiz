import React from 'react';

const ShortAnswerQuiz = ({ selectedOption, onChange, onSubmit }) => {
  return (
    <div>
      <form className="grid-rows-3 w-sm max-w-xl text-lg" onSubmit={onSubmit}>
        <input
          className="text-center placeholder:italic placeholder:text-slate-400 placeholder:text-center rounded-lg w-4/5 h-9 border-0 mb-2 focus:border-0 focus:placeholder:text-transparent mr-4 max-md:w-full max-md:mb-4"
          placeholder="Enter an answer as a short sentence"
          type="text"
          value={selectedOption}
          onChange={onChange}
        />
        <button
          className="bg-slate-800 text-white px-4 py-1 rounded-lg w-fit hover:bg-slate-200 hover:text-black h-9 max-md:w-full"
          type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShortAnswerQuiz;
