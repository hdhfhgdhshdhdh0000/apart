import React, { useState } from 'react';
import doorImage from '../assets/images/door.png';
import door2Image from '../assets/images/door2.png'; 
import door3Image from '../assets/images/door3.png';  
import doorOpenImage from '../assets/images/doorOpen.png';  

const DoorView = ({ keyTaken, isLockOpened, isCodeLockOpened, onUnlock, onBack, onLockClick, onHover, onEnd }) => {
  const handleUnlockAttempt = () => {
    if (keyTaken) {
      onUnlock();
      onHover('Открыто.');
      setTimeout(() => onHover(''), 10000);
    } else {
      onHover('Нет ключа.');
      setTimeout(() => onHover(''), 10000);
    }
  };

  const [isFading, setIsFading] = useState(false);

  const handleEndClick = () => {
    setIsFading(true); 
    setTimeout(onEnd, 5000); 
  };

  let doorBackground = doorImage;
  if (isLockOpened && !isCodeLockOpened) {
    doorBackground = door2Image;
  } else if (!isLockOpened && isCodeLockOpened) {
    doorBackground = door3Image;
  } else if (isLockOpened && isCodeLockOpened) {
    doorBackground = doorOpenImage;
  }

  return (
    <div className='door-view'
      style={{
        margin: 0,
        padding: 0,
        width: '1280px',
        height: '720px',
        position: 'relative',
        backgroundImage: `url(${doorBackground})`,
        backgroundSize: 'cover'
      }}>
      {(isLockOpened && isCodeLockOpened) &&
        <button
          onClick={handleEndClick}
          onMouseEnter={() => onHover('Конец.')}
          onMouseLeave={() => onHover('')}
          style={{
            position: 'absolute',
            left: '0px',
            bottom: '0px',
            width: '1280px',
            height: '720px',
            opacity: 0,
            pointerEvents: 'auto',
            cursor: 'pointer',
          }}
        >
          Конец
        </button>}
      {!isCodeLockOpened &&
        <button
          onMouseEnter={() => onHover('Кодовый замок')}
          onMouseLeave={() => onHover('')}
          style={{
            position: 'absolute',
            left: '560px',
            bottom: '150px',
            width: '150px',
            height: '150px',
            opacity: 0,
            pointerEvents: 'auto',
            cursor: 'pointer',
          }}
          onClick={onLockClick}
        >
          Кодовый замок
        </button>
      }
      {!isLockOpened && (
        <button
          onMouseEnter={() => onHover('Замок')}
          onMouseLeave={() => onHover('')}
          style={{
            position: 'absolute',
            right: '350px',
            bottom: '200px',
            width: '200px',
            height: '200px',
            opacity: 0,
            pointerEvents: 'auto',
            cursor: 'pointer',
          }}
          onClick={handleUnlockAttempt}
        >
          Замок
        </button>
      )}
      <button
        onClick={onBack}
        onMouseEnter={() => onHover('Прихожая')}
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
          zindex: '3',
        }}
      >
        Назад
      </button>

      {isFading && (
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
            animation: 'fadeOut 5s forwards',
            zIndex: 10,
          }}
        />
      )}

      <style>
        {`
          @keyframes fadeOut {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default DoorView;
