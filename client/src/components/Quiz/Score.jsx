import React from 'react';
import BackButton from '../BackButton';

const Score = ({ score }) => {
  return (
    <div className="flex-col text-2xl text-center">
      <h2 className='font-bold'>Results</h2>
      <h4>Your score is: {score}</h4>
    </div>
  );
};

export default Score;
