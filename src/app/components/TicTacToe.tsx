"use client";

import { useState } from 'react';

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<string | null>(null);

  const handleClick = (i: number) => {
    if (board[i] || winner) return;

    const newBoard = [...board];
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
    checkWinner(newBoard);
  };

  const checkWinner = (board: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
    if (!board.includes('')) {
      setWinner('Draw');
    }
  };

  const renderCell = (i: number) => {
    return (
      <button
        className="w-16 h-16 border border-gray-500 flex justify-center items-center text-3xl font-bold focus:outline-none"
        onClick={() => handleClick(i)}
      >
        {board[i]}
      </button>
    );
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setWinner(null);
    setXIsNext(true);
  };

  return (
    <div className="flex flex-col object-fit items-center justify-center">
      <div className="grid grid-cols-3 gap-4 bordr-2 ">
        {board.map((cell, index) => (
          <div key={index}>{renderCell(index)}</div>
        ))}
      </div>
      <div className="mt-4 justify-self-center px-4 py-2 gap-4">
        {winner ? (
          <div className='bg-black py-4 px-2 gap-4 border-1 rounded-md justify-self-center'>
            {winner === 'Draw' ? (
              <p className='text-xl font-semibold text-blue-300'>It's a Draw!</p>
            ) : (
              <p className='text-xl font-semibold text-green-300'>Player {winner} wins!</p>
            )}
            <button
              className="px-4 py-2 gap-4 border-1 bg-blue-500 text-white rounded-md mt-2 justify-self-center"
              onClick={resetGame}
            >
              Reset Game
            </button>
          </div>
        ) : (
          <p>Next Player: {xIsNext ? 'X' : 'O'}</p>
        )}
      </div>
    </div>
  );
};

export default TicTacToe;
