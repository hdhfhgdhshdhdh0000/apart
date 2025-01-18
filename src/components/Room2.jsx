import React from 'react';
import room2Image from '../assets/images/room2.png';

const Room2View = ({ onPaintingClick, onBack, onBoxPuzzleClick, onClockPuzzleClick, onCodeInputPuzzleClick, isCodeSolved, onCaseClick, onHover }) => {
  return (
    <div className='room2-view'>
      <img src={room2Image} alt='Room2' style={{ width: '100%' }} />
      <button
        style={{
          position: 'absolute',
          right: '498px',
          top: '205px',
          width: '150px',
          height: '150px',
          opacity: 0,
          pointerEvents: 'auto',
          cursor: 'pointer',
        }}
        onMouseEnter={() => onHover('Картина')}
        onMouseLeave={() => onHover('')}
        onClick={onPaintingClick}
      >
        Картина
      </button>
      <button
        style={{
          position: 'absolute',
          left: '425px',
          top: '390px',
          width: '120px',
          height: '120px',
          opacity: 0,
          pointerEvents: 'auto',
          cursor: 'pointer',
        }}
        onMouseEnter={() => onHover('Коробочка')}
        onMouseLeave={() => onHover('')}
        onClick={onBoxPuzzleClick}
      >
        Коробка
      </button>
      {isCodeSolved ? (
        <button
          style={{
            position: 'absolute',
            right: '420px',
            top: '410px',
            width: '70px',
            height: '70px',
            opacity: 0,
            pointerEvents: 'auto',
            cursor: 'pointer',
          }}
          onMouseEnter={() => onHover('Часовой шкафчик')}
          onMouseLeave={() => onHover('')}
          onClick={onCaseClick}>Открыть кейс</button>
      ) : (
        <button
          style={{
            position: 'absolute',
            right: '420px',
            top: '410px',
            width: '70px',
            height: '70px',
            opacity: 0,
            pointerEvents: 'auto',
            cursor: 'pointer',
          }}
          onMouseEnter={() => onHover('Часовой шкафчик')}
          onMouseLeave={() => onHover('')}
          onClick={onCodeInputPuzzleClick}>Ввести код для кейса</button>
      )}
      <button
        style={{
          position: 'absolute',
          right: '420px',
          top: '340px',
          width: '70px',
          height: '70px',
          opacity: 0,
          pointerEvents: 'auto',
          cursor: 'pointer',
        }}
        onMouseEnter={() => onHover('Часы')}
        onMouseLeave={() => onHover('')}
        onClick={onClockPuzzleClick}>Загадка с часами</button>
      <button onClick={onBack}
        style={{
          position: 'absolute',
          left: '0px',
          bottom: '0px',
          width: '150px',
          height: '720px',
          opacity: 0,
          pointerEvents: 'auto',
          cursor: 'pointer',
        }}
        onMouseEnter={() => onHover('Прихожая')}
        onMouseLeave={() => onHover('')}
      >
        Назад
      </button>
    </div>
  );
};

export default Room2View;
