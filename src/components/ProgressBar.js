import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <p>{Math.round(progress)}% Completed</p>
    </div>
  );
};

export default ProgressBar;
