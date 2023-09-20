import React from 'react';

const Option = ({ options, selectedOption, onOptionChange }) => {
  return (
    <div className="grid-rows-4 w-sm max-w-lg text-lg indent-8 max-md:p-4">
      {options.map((option, index) => (
        <div key={index} className="justify-self-start">
          <label>
            <input
              type="radio"
              value={option.content}
              checked={selectedOption === option.content}
              onChange={onOptionChange}
            />
           &nbsp;{option.content}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Option;
