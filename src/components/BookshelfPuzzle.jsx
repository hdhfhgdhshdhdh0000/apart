// BookshelfPuzzle.js
import React, { useState, useEffect } from 'react';
import bookshelfImage from '../assets/images/bookshelf.png';
import book1 from '../assets/images/book1.png';
import book2 from '../assets/images/book2.png';
import book3 from '../assets/images/book3.png';
import book4 from '../assets/images/book4.png';
import book5 from '../assets/images/book5.png';

const bookImages = {
  book1: book1,
  book2: book2,
  book3: book3,
  book4: book4,
  book5: book5,
};

const BookshelfPuzzle = ({ onSolve, onBack, isSolved,onHover }) => {
  const correctOrder = ['book1', 'book2', 'book3', 'book4', 'book5'];

  const [positions, setPositions] = useState([
    { id: 'book3', image: bookImages['book3'] },
    { id: 'book4', image: bookImages['book4'] },
    { id: 'book5', image: bookImages['book5'] },
    { id: 'book1', image: bookImages['book1'] },
    { id: 'book2', image: bookImages['book2'] },
  ]);

  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const isCorrect = positions.every((book, index) => book.id === correctOrder[index]);
    if (isCorrect && !isSolved) {
      onSolve();
      onHover('Собака.'); 
      setTimeout(() => onHover(''), 10000);  
    }
  }, [positions, isSolved, onSolve]);

  useEffect(() => {
    if (isSolved) {
      setPositions(
        correctOrder.map((id) => ({
          id,
          image: bookImages[id],
        }))
      );
    }
  }, [isSolved]);

  const handleBookClick = (bookId) => {
    if (isSolved) return; 

    if (selectedBook) {
      swapBooks(selectedBook, bookId);
      setSelectedBook(null);
    } else {
      setSelectedBook(bookId);
    }
  };

  const swapBooks = (bookId1, bookId2) => {
    setPositions((prevPositions) => {
      const newPositions = [...prevPositions];
      const index1 = newPositions.findIndex((book) => book.id === bookId1);
      const index2 = newPositions.findIndex((book) => book.id === bookId2);

      [newPositions[index1], newPositions[index2]] = [newPositions[index2], newPositions[index1]];

      return newPositions;
    });
  };

  return (
    <div style={{ position: 'relative', width: '1280px', height: '720px', margin: '0 auto' }}>
      <img src={bookshelfImage} alt="Bookshelf" style={{ width: '100%' }} />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          top: '160px',
          left: '50%',
          transform: 'translateX(-50%)',
          gap: '2px',
          zIndex: 2,
        }}
      >
        {positions.map((book) => (
          <img
            key={book.id}
            src={book.image}
            alt={book.id}
            style={{
              cursor: isSolved ? 'default' : 'pointer',
              border: selectedBook === book.id ? '2px solid red' : 'none',
              width: '115px',
              height: '385px',
            }}
            onClick={() => handleBookClick(book.id)}
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

export default BookshelfPuzzle;
