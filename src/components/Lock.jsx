import React, { useState } from 'react';
import lockImage from '../assets/images/lock.png';

const LockView = ({ onBack, onHover, onCodeUnlock }) => {
  const [code, setCode] = useState('');
  const [isPressed, setIsPressed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null); 
  const [isLocked, setIsLocked] = useState(false);

  const handleUnlock = () => {
    if (code === '1594') {
      setIsCorrect(true);
      setIsLocked(true);
      onCodeUnlock();
    } else {
      setIsCorrect(false);
    }

    setTimeout(() => {
      setIsCorrect(null);
    }, 3000);
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    if (/^\d*$/.test(input) && input.length <= 4) {
      setCode(input);
    }
  };

  return (
    <div className="lock-view">
      <img src={lockImage} alt="Lock" style={{ width: '100%' }} />
      <input
        style={{
          position: 'absolute',
          left: '585px',
          bottom: '330px',
          width: '150px',
          height: '50px',
          pointerEvents: isLocked ? 'none' : 'auto',
          cursor: isLocked ? 'not-allowed' : 'pointer',
          borderRadius: '10px',
          backgroundColor: 'gray',
          color: isLocked ? 'rgba(0, 255, 0, 0.5)' : 'rgba(0, 255, 0, 0.7)',
          fontSize: '12px',
          fontFamily: '"Press Start 2P", serif',
          textAlign: 'center',
        }}
        type="text"
        value={code}
        onChange={handleInputChange}
        placeholder="Введите код"
        disabled={isLocked}
      />
      <button
        style={{
          position: 'absolute',
          left: '615px',
          bottom: '430px',
          width: '100px',
          height: '70px',
          borderRadius: '10px',
          pointerEvents: isLocked ? 'none' : 'auto',
          cursor: isLocked ? 'not-allowed' : 'pointer',
          border: '2px solid #ccc',
          backgroundColor: isCorrect === true 
            ? '#4CAF50' 
            : isCorrect === false 
            ? '#FF4F4F' 
            : '#fff',
          transform: isPressed ? 'scale(0.95)' : 'scale(1)',
          boxShadow: isPressed
            ? '0 2px 4px rgba(0, 0, 0, 0.2)'
            : '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
        }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        onClick={handleUnlock}
        disabled={isLocked}
      >
      </button>
      <button
        onClick={onBack}
        onMouseEnter={() => onHover('Входная дверь')}
        onMouseLeave={() => onHover('')}
        style={{
          position: 'absolute',
          left: '0px',
          bottom: '0px',
          width: '1280px',
          height: '200px',
          opacity: 0,
          pointerEvents: 'auto',
          cursor: 'pointer',
        }}
      >
        Назад
      </button>
    </div>
  );
};

export default LockView;
