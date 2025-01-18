import React from 'react';
import paintingImage from '../assets/images/painting.png';

const PaintingView = ({ puzzleSolved, onSafeClick, onBack, onHover }) => {
  const handleClick = () => {
    if (puzzleSolved) {
      onSafeClick();
    } else {
      onHover('Где-то я видел эту белую собаку.');
      setTimeout(() => onHover(''), 10000);
    }
  };

  return (
    <div className='painting-view'>
      <img src={paintingImage} alt='Painting' style={{ width: '100%' }} />
      <button
        onMouseEnter={() => onHover('Собаки')}
        onMouseLeave={() => onHover('')}
        style={{
          position: 'absolute',
          left: '400px',
          top: '110px',
          width: '500px',
          height: '500px',
          opacity: 0,
          pointerEvents: 'auto',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        За картиной
      </button>
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
    </div>
  );
};

export default PaintingView;
