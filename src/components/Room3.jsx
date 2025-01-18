import React from 'react';
import room3Image from '../assets/images/room3.png';

const Room3View = ({ onBookshelfClick, onSudokuClick, onBack, onTVClick, isSudokuSolved, onCaesarClick, onHover }) => {
  return (
    <div className="room3-view" style={{ height: '720px' }}>
      <img src={room3Image} alt='Room3' style={{ width: '100%' }} />
      <button
        style={{
          position: 'absolute',
          right: '210px',
          top: '230px',
          width: '150px',
          height: '280px',
          opacity: 0,
          pointerEvents: 'auto',
          cursor: 'pointer',
        }}
        onMouseEnter={() => onHover('Книжная полка')}
        onMouseLeave={() => onHover('')}
        onClick={onBookshelfClick}>Посмотреть на книжную полку</button>
      {isSudokuSolved ? (
        <button
          style={{
            position: 'absolute',
            right: '570px',
            top: '420px',
            width: '100px',
            height: '100px',
            opacity: 0,
            pointerEvents: 'auto',
            cursor: 'pointer',
          }}
          onMouseEnter={() => onHover('Блокнот')}
          onMouseLeave={() => onHover('')}
          onClick={onCaesarClick}>Цезарь</button>
      ) : (
        <button
          style={{
            position: 'absolute',
            right: '570px',
            top: '420px',
            width: '100px',
            height: '100px',
            opacity: 0,
            pointerEvents: 'auto',
            cursor: 'pointer',
          }}
          onMouseEnter={() => onHover('Блокнот')}
          onMouseLeave={() => onHover('')}
          onClick={onSudokuClick}>Судоку</button>
      )}
      <button
        style={{
          position: 'absolute',
          right: '680px',
          top: '280px',
          width: '200px',
          height: '200px',
          opacity: 0,
          pointerEvents: 'auto',
          cursor: 'pointer',
        }}
        onMouseEnter={() => onHover('Телевизор')}
        onMouseLeave={() => onHover('')}
        onClick={onTVClick}>Телевизор</button>
      <button
        style={{
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '200px',
          height: '720px',
          opacity: 0,
          pointerEvents: 'auto',
          cursor: 'pointer',
        }}
        onMouseEnter={() => onHover('Прихожая')}
        onMouseLeave={() => onHover('')}
        onClick={onBack}>Назад</button>
    </div>
  );
};

export default Room3View;
