import React, { useState } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    if (board[index] || checkWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'X' : 'O';
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const checkWinner = (squares) => {
    const lines = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ];

    for (let [a,b,c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = checkWinner(board);
  const status = winner ? `Winner: ${winner}` : board.every(Boolean) ? "Draw!" : `Next Turn: ${isXTurn ? 'X' : 'O'}`;
  

  const renderIcon = (value) => {
    if (value === 'X') return <img src={cross_icon} alt="X" />;
    if (value === 'O') return <img src={circle_icon} alt="O" />;
    return null;
  };


  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div className="container">
      <h1 className="title">Tic Tac Toe Game in <span>React</span></h1>
      <div className="status">{status}</div>
      <div className="board">
        {board.map((value, index) => (
          <div key={index} className="box" onClick={() => handleClick(index)}>
            {renderIcon(value)}
          </div>
        ))}
      </div>
      <button className="reset" onClick={resetGame}>Reset</button>
    </div>
  );
};

export default TicTacToe;


