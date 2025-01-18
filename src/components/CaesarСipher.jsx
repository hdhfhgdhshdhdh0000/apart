import React, { useState, useEffect } from 'react';
import defaultImage from '../assets/images/caesarbg.png'; 
import solvedImage from '../assets/images/solvedcaesar.png'; 

const CaesarCipher = ({ isSolved, onSolve, onHover, onBack }) => {
  const [input, setInput] = useState(Array(6).fill('')); 
  const [image, setImage] = useState(defaultImage); 

  useEffect(() => {
    if (isSolved) {
      setImage(solvedImage);
    }
  }, [isSolved]);

  const handleInputChange = (e, index) => {
    const newInput = [...input];
    newInput[index] = e.target.value.toUpperCase(); 
    setInput(newInput);
  };

  useEffect(() => {
    if (input.every((letter) => letter !== '')) {
      const answer = input.join('');
      if (answer === 'ЕТВЕРТ') { 
        setImage(solvedImage); 
        onSolve(); 
      }
    }
  }, [input, onSolve]);


  return (
    <div className="caesar-cipher" style={{ position: 'relative' }}>
      <img src={image} style={{ width: '100%' }} />
      <div
        style={{
          display: isSolved ? 'none' : 'flex',
          gap: '10px',
          position: 'absolute',
          left: '50%',
          top: '60%',
          transform: 'translate(-50%, -50%)',
          
        }}
      >
        {input.map((letter, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={letter}
            onChange={(e) => handleInputChange(e, index)}
            style={{
              textTransform: 'uppercase',
              width: '40px',
              height: '40px',
              fontSize: '40px',
              backgroundColor: 'transparent',
              border: '1px solid transparent',
              fontFamily: '"Caveat", serif',
              outline: 'none',
            }}
          />
        ))}
      </div>
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

export default CaesarCipher;


