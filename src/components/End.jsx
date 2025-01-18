import React from 'react';

const End = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        fontSize: '48px',
      }}
    >
      <div style={{ textAlign: 'center' }}>Конец</div>
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          fontSize: '18px',
        }}
      >
        Вахитов А.И. ПИ-3ИВТ211Б
      </div>
    </div>
  );
};

export default End;
