import React, { useState, useEffect } from 'react';
import hourHandImg from '../assets/images/hour-hand.png';
import minuteHandImg from '../assets/images/minute-hand.png';
import clockFaceImg from '../assets/images/clock-face.png';
import backgroundImg from '../assets/images/backgroundclock.png'; 

const ClockPuzzle = ({ isClockSolved, onBack, onSolved, onHover }) => {
  const targetHours = 0;
  const targetMinutes = 15;

  const initialHourAngle = 10 * 30; 
  const initialMinuteAngle = 35 * 6; 

  const [hourAngle, setHourAngle] = useState(initialHourAngle);
  const [minuteAngle, setMinuteAngle] = useState(initialMinuteAngle);

  const solvedHourAngle = 8 * 30; 
  const solvedMinuteAngle = 20 * 6; 

  const handleHourClick = () => {
    if (!isClockSolved) {
      setHourAngle((prev) => {
        const newAngle = (prev + 30) % 360;
        return newAngle;
      });
    }
  };

  const handleMinuteClick = () => {
    if (!isClockSolved) {
      setMinuteAngle((prev) => {
        const newAngle = (prev + 30) % 360;
        return newAngle;
      });
    }
  };

  useEffect(() => {
    const currentHours = Math.floor((hourAngle / 30) % 12);
    const currentMinutes = Math.floor((minuteAngle / 6) % 60);
    if (currentHours === targetHours && currentMinutes === targetMinutes) {
      const timeCode = `${String(targetHours).padStart(2, '0')}${String(targetMinutes).padStart(2, '0')}`;
      onSolved(timeCode);
    }
  }, [hourAngle, minuteAngle, onSolved]);

  useEffect(() => {
    if (isClockSolved) {
      setHourAngle(solvedHourAngle);
      setMinuteAngle(solvedMinuteAngle);
      onHover('Маятник в часах пошатнулся.'); 
      setTimeout(() => onHover(''), 10000); 
    }
  }, [isClockSolved]);

  return (
    <div className="clock-puzzle">
      <div className="clock-face">
        <img
          src={hourHandImg}
          alt="Часовая стрелка"
          className="hour-hand"
          style={{
            transform: `rotate(${hourAngle}deg)`,
            transition: isClockSolved ? 'none' : 'transform 0.3s ease-in-out',
          }}
          onMouseEnter={() => onHover('Часовая стрелка')}
          onMouseLeave={() => onHover('')}
          onClick={handleHourClick}
        />
        <img
          src={minuteHandImg}
          alt="Минутная стрелка"
          className="minute-hand"
          style={{
            transform: `rotate(${minuteAngle}deg)`,
            transition: isClockSolved ? 'none' : 'transform 0.3s ease-in-out',
          }}
          onMouseEnter={() => onHover('Минутная стрелка')}
          onMouseLeave={() => onHover('')}
          onClick={handleMinuteClick}
        />
        <div className="center-dot" />
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
      <style jsx>{`
        .clock-puzzle {
          text-align: center;
          position: relative;
          width: 1280px;
          height: 720px;
          background-image: url(${backgroundImg});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
  
        .clock-face {
          will-change: transform;
          isolation: isolate;
          width: 200px;
          height: 200px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-image: url(${clockFaceImg});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border: 5px solid #333;
          border-radius: 50%;
        }
  
        .hour-hand,
        .minute-hand {
          z-index: 2;
          position: absolute;
          transform-origin: 50% 100%;
          cursor: pointer;
          transition: transform 0.3s ease-in-out !important;
          transform: translate(-50%, -50%);
        }
  
        .hour-hand {
          width: 5px;
          height: 100px;
          background-image: url(${hourHandImg});
          background-size: contain;
          background-repeat: no-repeat;
        }
  
        .minute-hand {
          width: 5px;
          height: 100px;
          background-image: url(${minuteHandImg});
          background-size: contain;
          background-repeat: no-repeat;
        }
  
        .center-dot {
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: #332d2e;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 3;
        }
      `}</style>
    </div>
  );
  
};

export default ClockPuzzle;
