import React from 'react';
import BackButton from '../BackButton';

const Score = ({ score }) => {
  return (
    <div>
      <h2>Results</h2>
      <h4>Your score is: {score}</h4>
    </div>
  );
};

export default Score;
