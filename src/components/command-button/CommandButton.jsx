import React from 'react';

import './CommandButton.css';

const CommandButton = ({ speechRecognition, listening, start }) => {
  return (
    <div className='command-button'>
      <button
        className='command-button__button'
        onTouchStart={start}
        onMouseDown={start}
        onTouchEnd={speechRecognition.stopListening}
        onMouseUp={speechRecognition.stopListening}></button>

      {listening && (
        <>
          <div className='waves wave-1'></div>
        </>
      )}
    </div>
  );
};

export default CommandButton;
