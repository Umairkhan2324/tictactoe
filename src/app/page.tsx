import React from 'react'
import TicTacToe from './components/TicTacToe';
const page: React.FC = () => {
  return (
    <><div className='flex flex-col overflow-scroll bg-cover bg-center bg-no-repeat h-screen py-10 px-5' style={{ backgroundImage: "url('/bg.jpg')" }}>
      <header className='text-4xl font-bold text-center' >
      TIC TAC TOE 
    </header>
      <TicTacToe />
    </div>
    </>
  );
};

export default page