import React from 'react';

const Option = ({ options, selectedOption, onOptionChange }) => {
  return (
    <div>
      {options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              value={option.content}
              checked={selectedOption === option.content}
              onChange={onOptionChange}
            />
            {option.content}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Option;
