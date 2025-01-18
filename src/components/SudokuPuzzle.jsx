import React, { useState, useEffect } from 'react';
import sudokuimg from '../assets/images/sudoku.png';
import errorsudimg from '../assets/images/error_sud.png';

const SudokuPuzzle = ({ onBack, onSudokuSolved,onHover }) => {
  const initialBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];

  const correctSolution = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ];

  const [board, setBoard] = useState(initialBoard);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (isBoardFilled()) {
      checkSolution();
    }
  }, [board]);

  const isBoardFilled = () => {
    return board.every((row) => row.every((cell) => cell !== 0));
  };

  const handleChange = (row, col, value) => {
    const newBoard = [...board];
    newBoard[row][col] = value === '' ? 0 : parseInt(value);
    setBoard(newBoard);

    setErrors((prevErrors) =>
      prevErrors.filter((error) => error.row !== row || error.col !== col)
    );
  };

  const checkSolution = () => {
    const newErrors = [];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] !== correctSolution[i][j]) {
          newErrors.push({ row: i, col: j });
        }
      }
    }

    if (newErrors.length === 0) {
      onSudokuSolved();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="sudoku-puzzle">
      <div className="background">
        <div className="board">
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell, colIndex) => {
                const isError = errors.some(
                  (error) => error.row === rowIndex && error.col === colIndex
                );
                return (
                  <input
                    key={colIndex}
                    type="text"
                    maxLength="1"
                    value={cell === 0 ? '' : cell}
                    onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                    onKeyDown={(e) => {
                      if (!/^[1-9]$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
                        e.preventDefault();
                      }
                    }}
                    disabled={initialBoard[rowIndex][colIndex] !== 0}
                    className={`cell ${isError ? 'error' : ''}`}
                  />
                );
              })}
            </div>
          ))}
        </div>
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
      <style jsx>{`
        .sudoku-puzzle {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .background {
          position: relative;
          width: 1280px;
          height: 720px;
          background-image: url(${sudokuimg});
          background-size: cover;
          background-position: center;
        }

        .board {
          position: absolute;
          top: 80px;
          left: 390px;
          display: grid;
          grid-template-columns: repeat(9, 50px);
          grid-template-rows: repeat(9, 50px);
          gap: 5px;
        }

        .cell {
          width: 50px;
          height: 50px;
          font-family: "Permanent Marker", serif;
          font-size: 30px;
          text-align: center;
          border: 1px solid transparent;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.0);
          
        }

        .cell.error {
          background-image: url(${errorsudimg}); 
          background-size: cover;
          background-position: center;
        }

      `}</style>
    </div>
  );
};

export default SudokuPuzzle;
