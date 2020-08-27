import React from 'react';

const PlayAgainBtn = () => (
  <button
    style={{ cursor: 'pointer' }}
    onClick={() => window.location.reload()}
  >
    Play Again
  </button>
);

const DisplayGameStatus = ({ gameStatus, currentPlayer }) => {
  let msg = `It's ${currentPlayer} PlayerTurn`;
  gameStatus.isDraw && (msg = `Game Draw 🤫`);
  gameStatus.winner && (msg = `player ${gameStatus.winner} won the Game`);
  if (gameStatus.isDraw || gameStatus.winner) {
    return (
      <div>
        <div>{msg}</div>
        <PlayAgainBtn />
      </div>
    );
  }
  return <div>{msg}</div>;
};

export default DisplayGameStatus;
