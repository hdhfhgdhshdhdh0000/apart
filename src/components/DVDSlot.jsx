import React from 'react';
import dvdPlayerImage from '../assets/images/dvdplayer.png';

const DVDSlot = ({ 
  hasCassette, 
  isCassetteInserted, 
  setIsCassetteInserted, 
  isDvdOn, 
  setIsDvdOn, 
  isWiringSolved, 
  onBack, 
  onHover 
}) => {

  const handleInsertCassette = () => {
    if (hasCassette) {
      onHover('Видеокассета на месте.');
      setTimeout(() => onHover(''), 10000); 
      setIsCassetteInserted(true);
    } else {
      onHover('Бессмысленно.'); 
      setTimeout(() => onHover(''), 10000); 
    }
  };

  const handlePowerOn = () => {
    if (isWiringSolved && isCassetteInserted) {
      onHover('Включено.');
      setTimeout(() => onHover(''), 10000); 
      setIsDvdOn(true);
    } else if (isWiringSolved && !hasCassette &&!isCassetteInserted) {
      onHover('Нужна видеокассета...');
      setTimeout(() => onHover(''), 10000); 
    } else if (isWiringSolved && hasCassette &&!isCassetteInserted) {
      onHover('Нужно засунуть видеокассету.');
      setTimeout(() => onHover(''), 10000); 
    }
    else {
      onHover('Что-то с проводами...');
      setTimeout(() => onHover(''), 10000); 
    }
  };

  return (
    <div className="dvd-slot">
      <img src={dvdPlayerImage} alt="Player" className="dvd-player-image" />

      <button
        onClick={handleInsertCassette}
        onMouseEnter={() => onHover('Вставить видеокассету')}
        onMouseLeave={() => onHover('')}
        style={{
          position: 'absolute',
          left: '400px',
          bottom: '345px',
          width: '475px',
          height: '100px',
          opacity: 0,
          pointerEvents: 'auto',
          cursor: 'pointer',
        }}
        className="insert-cassette-button"
      >
        Вставить кассету
      </button>

      <button
        onClick={handlePowerOn}
        onMouseEnter={() => onHover('Включить видеомагнитофон')}
        onMouseLeave={() => onHover('')}
        style={{
          position: 'absolute',
          left: '100px',
          bottom: '220px',
          width: '270px',
          height: '270px',
          opacity: 0,
          pointerEvents: 'auto',
          cursor: 'pointer',
        }}
        disabled={isDvdOn}
        className="power-button"
      >
        Вкл
      </button>

      <button
        onClick={onBack}
        onMouseEnter={() => onHover('Гостинная')}
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
    </div>
  );
};

export default DVDSlot;
