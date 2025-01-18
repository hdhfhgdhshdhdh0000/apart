import React from 'react';
import codebg2 from '../assets/images/codebg2.png';
import codebg3 from '../assets/images/codebg3.png';

const CaseView = ({ onBack, onTakeKey, keyTaken, onHover }) => {
  return (
    <div
      className="case-view-container"
      style={{
        backgroundImage: `url(${keyTaken ? codebg3 : codebg2})`,
      }}
    >
      {!keyTaken ? (
        <button onClick={onTakeKey}
        onMouseEnter={() => onHover('Взять ключ от замка на входной двери.')}
        onMouseLeave={() => onHover('')}
        style={{
          position: 'absolute',
          left: '538px',
          bottom: '250px',
          width: '200px',
          height: '200px',
          opacity: 0,
          pointerEvents: 'auto',
          cursor: 'pointer',
        }}
        >Взять ключ</button>
      ) : ' '}
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
        .case-view-container {
          position: relative;
          width: 1280px;
          height: 720px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </div>
  );
};

export default CaseView;
