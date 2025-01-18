import React, { useState, useEffect } from 'react';
import codebg1 from '../assets/images/codebg1.png';

const CodeInputPuzzle = ({ onBack, onCodeSolved, onHover }) => {
  const [correctCode] = useState('0820'); 
  const [code, setCode] = useState([0, 0, 0, 0]); 
  const [isSolved, setIsSolved] = useState(false); 

  const increaseDigit = (index) => {
    setCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[index] = (newCode[index] + 1) % 10; 
      return newCode;
    });
  };

  const decreaseDigit = (index) => {
    setCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[index] = (newCode[index] - 1 + 10) % 10; 
      return newCode;
    });
  };

  useEffect(() => {
    const enteredCode = code.join('');
    if (enteredCode === correctCode) {
      setIsSolved(true); 
      onCodeSolved(); 
    }
  }, [code, correctCode, onCodeSolved]);

  return (
    <div className={`puzzle-container ${isSolved ? 'solved' : ''}`}>
      {!isSolved && (
        <>
          <div className="code-display">
            {code.map((digit, index) => (
              <div key={index} className="digit-box">
                <button className="button" onClick={() => increaseDigit(index)}>+</button>
                <span>{digit}</span>
                <button className="button" onClick={() => decreaseDigit(index)}>-</button>
              </div>
            ))}
          </div>
          <button
            onClick={onBack}
            onMouseEnter={() => onHover('Спальня')}
            onMouseLeave={() => onHover('')}
            style={{
              position: 'absolute',
              left: '0px',
              bottom: '0px',
              width: '1280px',
              height: '100px',
              opacity: 0,
              pointerEvents: 'auto',
              cursor: 'pointer',
            }}
          >
            Назад
          </button>
        </>
      )}
      <style jsx>{`
        .puzzle-container {
          position: relative;
          width: 1280px;
          height: 720px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-image: url(${codebg1});
          background-size: cover;
          background-position: center;
          transition: opacity 2s ease-in-out;
        }

        .code-display {
          display: flex;
          justify-content: center;
          position: absolute;
          top: 245px;
          font-family: Helvetica;
          font-weight: 900;
          font-size: 20px;
          color: white;
        }

        .digit-box {
          margin: 0 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .button {
          width: 40px; 
          height: 40px; 
          font-size: 24px; 
          display: flex; 
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-weight: 900;
          margin-top: 38px;
          margin-bottom: 38px;
          color: white;
          background: none; 
          border: none;
        }

      `}</style>
    </div>
  );
};

export default CodeInputPuzzle;
