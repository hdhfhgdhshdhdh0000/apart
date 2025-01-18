import React from 'react';
import roomImage from '../assets/images/room.png';

const RoomView = ({ onDoorClick, onRoom3Click, onRoom2Click, onHover}) => {
  return (
    <div className="room-view" style={{ position: 'relative' }}>

      <img src={roomImage} alt='Room' style={{ width: '100%' }} />
      <button
        style={{
          position: 'absolute',
          right: '760px',
          top: '130px',
          width: '330px',
          height: '450px',
          opacity: 0,
          cursor: 'pointer', 
          pointerEvents: 'auto',
        }}
        onClick={onDoorClick}
        onMouseEnter={() => onHover('Входная дверь')}
        onMouseLeave={() => onHover('')}
      >
        Door
      </button>
      <button
        style={{
          position: 'absolute',
          right: '0px',
          top: '0px',
          width: '300px',
          height: '720px',
          opacity: 0,
          pointerEvents: 'auto',
          cursor: 'pointer', 
        }}
        onClick={onRoom3Click}
        onMouseEnter={() => onHover('Гостинная')}
        onMouseLeave={() => onHover('')} 
      >
        Room3
      </button>
            <button
        style={{
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '150px',
          height: '720px',
          opacity: 0,
          pointerEvents: 'auto',
          cursor: 'pointer', 
        }}
        onClick={onRoom2Click}
        onMouseEnter={() => onHover('Спальня')}
        onMouseLeave={() => onHover('')}
      >
        Room2
      </button>
    </div>
  );
};

export default RoomView;
