import React, { useState } from 'react';
import closedBoxImage from '../assets/images/closedBox.png';
import openBoxImage from '../assets/images/openBox.png';
import openBoxClearImage from '../assets/images/openBoxclear.png';
import checkButtonDefault from '../assets/images/checkButtonDefault.png';
import checkButtonError from '../assets/images/checkButtonError.png';

const BoxPuzzle = ({ boxState, setBoxState, onBack, onCassetteTake, onHover }) => {
  const [input, setInput] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [buttonImage, setButtonImage] = useState(checkButtonDefault);

  const handleCheck = () => {
    if (input.toLowerCase() === 'слонf3h5') {
      setBoxState('open');
    } else {
      setIsAnimating(true);
      setTimeout(() => {
        setButtonImage(checkButtonError);
        setIsAnimating(false);
      }, 1000);
    }
  };

  const handleTakeCassette = () => {
    setBoxState('openClear');
    onCassetteTake();
    onHover('Вы взяли видеокассету'); 
  };

  return (
    <div className="box-puzzle">
      {boxState === 'closed' && <img src={closedBoxImage} alt="Closed Box" />}
      {boxState === 'open' && <img src={openBoxImage} alt="Open Box" />}
      {boxState === 'openClear' && <img src={openBoxClearImage} alt="Open Box Clear" />}
      {boxState === 'closed' && (
        <>
          <input
            style={{
              position: 'absolute',
              left: '560px',
              bottom: '320px',
              width: '270px',
              height: '50px',
              backgroundColor: 'rgba(255, 255, 255, 0)',
              color: 'black',
              border: 'none',
              outline: 'none',
              fontSize: '30px',
              pointerEvents: 'auto',
              cursor: 'pointer',
              fontFamily: "'Comforter Brush', sans-serif",
            }}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="пример: пешкаb2b3"
          />
          <img
            src={buttonImage}
            alt="Check"
            onClick={handleCheck}
            className={isAnimating ? 'fade-out' : 'fade-in'}
            style={{
              position: 'absolute',
              left: '600px',
              bottom: '250px',
              width: '150px',
              height: '50px',
              cursor: 'pointer',
            }}
          />
        </>
      )}

      {boxState === 'open' && (
        <button
          onClick={handleTakeCassette}
          onMouseEnter={() => onHover('Взять видеокассету')}
          onMouseLeave={() => onHover('')}
          style={{
            position: 'absolute',
            left: '280px',
            bottom: '200px',
            width: '740px',
            height: '330px',
            opacity: 0,
            pointerEvents: 'auto',
            cursor: 'pointer',
          }}
        >
          Взять кассету
        </button>
      )}

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
      <style jsx>{`
        .box-puzzle {
          position: relative;
          text-align: center;
        }

        .box-puzzle img {
          max-width: 100%;
          height: auto;
        }

        .fade-out {
          animation: fadeOut 1s ease-out;
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        .fade-in {
          animation: fadeIn 1s ease-in;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default BoxPuzzle;
