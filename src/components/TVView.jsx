import React, { useState, useEffect, useCallback } from 'react';
import tvWithDvdOn from '../assets/images/tv-with-dvd-on.png';
import tvWithDvdOff from '../assets/images/tv-with-dvd-off.png';
import tvOff from '../assets/images/tv-off.png';

const TVView = ({
  isTvOn,
  toggleTv,
  isDvdOn,
  isWiringSolved,
  onWiringPuzzleClick,
  onDVDSlotClick,
  onBack,
  onHover,
}) => {
  const [tvImage, setTvImage] = useState(tvOff);

  const getTvImage = useCallback(() => {
    if (!isTvOn) return tvOff;
    if (isTvOn && isDvdOn) return tvWithDvdOn;
    return tvWithDvdOff;
  }, [isTvOn, isDvdOn]);

  useEffect(() => {
    setTvImage(getTvImage());
  }, [getTvImage]);

  const handlePowerClick = () => {
    if (isWiringSolved && isDvdOn) {
      onHover(isTvOn ? '' : 'Код к замку на входной двери.');
      setTimeout(() => onHover(''), 10000); 
      toggleTv();
    } else if (isWiringSolved && !isDvdOn) {
      toggleTv();
      onHover(isTvOn ? '' : 'Шум.');
      setTimeout(() => onHover(''), 10000); 
    }
    else {
      onHover('Что-то с проводами...');
      setTimeout(() => onHover(''), 10000); 
    }
  };

  return (
    <div className="tv-view" style={{ height: '720px' }}>
      <img src={tvImage} alt="TV" className="tv-image" />
      <button
        style={{
          position: 'absolute',
          right: '416px',
          top: '70px',
          width: '470px',
          height: '300px',
          opacity: 0,
          pointerEvents: 'auto',
          cursor: 'pointer',
        }}
        onMouseEnter={() => onHover(isTvOn ? 'Выключить' : 'Включить')}
        onMouseLeave={() => onHover('')}
        onClick={handlePowerClick}>
        {isTvOn ? 'Выключить' : 'Включить'}
      </button>
      <button
        style={{
          position: 'absolute',
          right: '430px',
          bottom: '0px',
          width: '450px',
          height: '180px',
          opacity: 0,
          pointerEvents: 'auto',
          cursor: 'pointer',
        }}
        onMouseEnter={() => onHover('Провода')}
        onMouseLeave={() => onHover('')}
        onClick={onWiringPuzzleClick}>Провода</button>
      <button
        style={{
          position: 'absolute',
          right: '550px',
          top: '390px',
          width: '200px',
          height: '90px',
          opacity: 0,
          pointerEvents: 'auto',
          cursor: 'pointer',
        }}
        onMouseEnter={() => onHover('Видеомагнитофон')}
        onMouseLeave={() => onHover('')}
        onClick={onDVDSlotClick}>Видеомагнитофон</button>
      <button
        style={{
          position: 'absolute',
          left: '0px',
          bottom: '0px',
          width: '200px',
          height: '720px',
          opacity: 0,
          pointerEvents: 'auto',
          cursor: 'pointer',
        }}
        onMouseEnter={() => onHover('Гостинная')}
        onMouseLeave={() => onHover('')}
        onClick={onBack}>Назад</button>
    </div>
  );
};

export default TVView;
