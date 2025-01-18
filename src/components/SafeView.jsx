import React, { useState, useEffect } from 'react';
import closedSafeImage from '../assets/images/closed_safe.png';
import openSafeImage from '../assets/images/open_safe.png';
import paperImage from '../assets/images/paper.png'; 

const SafeView = ({ onBack, onOpen, isSafeOpen, onHover }) => {
  const correctCode = [2, 8, 4]; 
  const [enteredCode, setEnteredCode] = useState([]);
  const [lightColor, setLightColor] = useState(null); 
  const [showPaper, setShowPaper] = useState(false); 
  const [lastEnteredCode, setLastEnteredCode] = useState(''); 
  const [canOpenSafe, setCanOpenSafe] = useState(false); 

  const handleButtonClick = (number) => {
    setEnteredCode((prevCode) => {
      const newCode = [...prevCode, number];
      if (newCode.length === correctCode.length) {
        checkCode(newCode);
      }
      return newCode;
    });
  };

  const checkCode = (code) => {
    if (JSON.stringify(code) === JSON.stringify(correctCode)) {
      setLightColor('green');
      setCanOpenSafe(true); 
    } else {
      setLightColor('red');
    }
    setLastEnteredCode(code.join('')); 
    setEnteredCode([]); 
  };

  const handleOpenSafe = () => {
    if (lightColor === 'green' && canOpenSafe) {
      onOpen(); 
    } else {
      onHover('Не открывается.');
      setTimeout(() => onHover(''), 10000); 
    }
  };

  const handleShowPaper = () => {
    setShowPaper(true);
  };

  const handleHidePaper = () => {
    setShowPaper(false);
  };

  return (
    <div>
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

      <img
        src={isSafeOpen ? openSafeImage : closedSafeImage}
        alt="Safe"
        style={{
          width: '1280px',
          height: '720px',
        }}
      />

      {!isSafeOpen && (
        <div
          style={{
            position: 'absolute',
            top: '270px',
            right: '590px',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            zIndex: -1,
            backgroundColor: lightColor,
          }}
        />
      )}

      {!isSafeOpen && (
        <div
          style={{
            position: 'absolute',
            top: '255px',
            right: '485px',
            width: '110px',
            height: '30px',
            backgroundColor: '#f9f9f9',
            border: '2px solid #ccc',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          {enteredCode.length > 0 ? enteredCode.join('') : lastEnteredCode || '---'}
        </div>
      )}

      {!isSafeOpen && (
        <div
          style={{
            position: 'absolute',
            top: '300px',
            right: '432px',
            transform: 'translateX(-50%)',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 30px)',
            gap: '10px',
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleButtonClick(num)}
              disabled={isSafeOpen}
              style={{
                width: '30px',
                height: '30px',
                fontSize: '20px',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
            >
              {num}
            </button>
          ))}
        </div>
      )}

      {!isSafeOpen && (
        <button
          onMouseEnter={() => onHover('Открыть сейф')}
          onMouseLeave={() => onHover('')}
          onClick={handleOpenSafe}
          style={{
            position: 'absolute',
            left: '470px',
            bottom: '340px',
            width: '150px',
            height: '150px',
            cursor: 'pointer',
            opacity: 0,
          }}
        >
          Открыть сейф
        </button>
      )}

      {isSafeOpen && !showPaper && (
        <button
          onMouseEnter={() => onHover('Посмотреть листок')}
          onMouseLeave={() => onHover('')}
          onClick={handleShowPaper}
          style={{
            position: 'absolute',
            left: '495px',
            bottom: '220px',
            width: '180px',
            height: '110px',
            opacity: 0,
            pointerEvents: 'auto',
            cursor: 'pointer',
          }}
        >
          Посмотреть листок
        </button>
      )}

      {showPaper && (
        <div
          onClick={handleHidePaper}
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <img src={paperImage} alt="Paper"/>
        </div>
      )}
    </div>
  );
};

export default SafeView;
