import React, { useState, useEffect } from 'react';
import wireImage from '../assets/images/wirepuzzle.png';

const WiringPuzzle = ({ onSolve, onBack, isSolved, onHover }) => {
  const [connections, setConnections] = useState({});
  const [isChecking, setIsChecking] = useState(false);
  const [showOptions, setShowOptions] = useState(true);

  const correctConnections = {
    A: 'green',
    B: 'yellow',
    C: 'purple',
    D: 'orange',
    E: 'red',
    F: 'blue',
  };

  const handleConnect = (point, wire) => {
    setConnections((prev) => ({ ...prev, [point]: wire }));
  };

  const checkSolution = () => {
    setIsChecking(true);
    const solved = Object.keys(correctConnections).every(
      (point) => connections[point] === correctConnections[point]
    );

    setTimeout(() => setIsChecking(false), 2000);

    if (solved) {
      onSolve();
      onHover('Кажись, заработало!');
      setTimeout(() => onHover(''), 10000);
    } else {
      onHover('Красный. Зеленый.');
      setTimeout(() => onHover(''), 10000);
    }
  };

  useEffect(() => {
    if (isSolved) {
      setShowOptions(false);
    }
  }, [isSolved]);

  return (
    <div className="wiring-puzzle">
      <h2
        style={{
          color: '#013220',
          textShadow: '2px 2px 4px rgba(0, 255, 0, 0.5)',
        }}
      >Подключите провода к правильным точкам</h2>
      <div className="points">
        {['A', 'B', 'C', 'D', 'E', 'F'].map((point) => (
          <div key={point} className="point-container">
            <div
              className={`point ${isChecking ? 'check' : ''} 
                ${isChecking && connections[point] === correctConnections[point] ? 'correct' : ''} 
                ${isChecking && connections[point] !== correctConnections[point] && connections[point] !== undefined ? 'incorrect' : ''} 
                ${isSolved ? 'solved' : ''}`} 
            >
              {point}
            </div>
            {showOptions && ( 
              <div className="wire">
                <select
                  onChange={(e) => handleConnect(point, e.target.value)}
                  disabled={isSolved}
                >
                  <option value="">Выбери провод</option>
                  {['red', 'blue', 'yellow', 'green', 'purple', 'orange'].map((wire) => (
                    <option key={wire} value={wire}>
                      {wire.charAt(0).toUpperCase() + wire.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        ))}
      </div>
      {!isSolved && (
        <button
        style={{
          position: 'absolute',
          bottom: '200px',
          width: '190px',
          height: '50px',
          cursor: 'pointer',
          backgroundColor: 'gray',
          borderRadius: '10px',
          color: '#333333',
          textShadow: '1px 1px 2px #000000, -1px -1px 2px rgba(255, 255, 255, 0.4)', 
          fontFamily: '"Press Start 2P", serif',
        }}
        onClick={checkSolution}>Проверить подключение</button>
      )}
      <button
        onClick={onBack}
        onMouseEnter={() => onHover('Гостиная')}
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
        .wiring-puzzle {
          position: relative;
          text-align: center;
          padding: 0px;
          background-image: url(${wireImage});
          background-size: cover;
          background-position: center;
          width: 1280px;
          height: 720px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden; 
        }

        .points {
          display: flex;
          justify-content: space-evenly;
          margin: 20px 0;
          width: 100%;
          max-width: 100%;
        }

        .point-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 120px; 
        }

        .point {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: gray;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          transition: background-color 1s ease;
        }

        .point.correct {
          animation: blinkGreen 2s ease 3, returnToGray 2s ease forwards;
          background-color: green;
        }

        .point.incorrect {
          animation: blinkRed 2s ease 3, returnToGray 2s ease forwards;
          background-color: red;
        }

        .point.solved {
          background-color: green; 
        }

        .wire {
          margin-top: 10px;
        }

        select {
          width: 150px;
          padding: 5px;
          font-size: 16px;
          background-color: gray;
          border-radius: 10px;
        }

        @keyframes blinkGreen {
          0%, 100% {
            background-color: green;
          }
          20%, 40%, 60%, 80% {
            background-color: #A2D8A2;
          }
        }

        @keyframes blinkRed {
          0%, 100% {
            background-color: red;
          }
          20%, 40%, 60%, 80% {
            background-color: #FFB6B6;
          }
        }

        @keyframes returnToGray {
          100% {
            background-color: gray;
          }
        }
      `}</style>
    </div>
  );
};

export default WiringPuzzle;
