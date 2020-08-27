import React from 'react';
import getWinningArray from './utilities';
import Tiles from './tiles';
import DisplayGameStatus from './displayGameStatus';
import './ticTacToe.css';

const getGameStatus = (table) => {
  const gridSize = Math.pow(table.length, 0.5);
  const lines = getWinningArray(gridSize);
  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    let areInLine = lines[lineIndex].every(
      (box) => table[box] && table[box] === table[lines[lineIndex][0]]
    );
    if (areInLine) return true;
  }
  return false;
};

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: new Array(Math.pow(this.props.gridSize, 2)).fill(''),
      currentPlayer: '🟢',
      nextPlayer: '🔴',
      isDraw: false,
      winner: null,
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(boxIndex) {
    this.setState(({ table, currentPlayer, nextPlayer, isGameOver }) => {
      if (table[boxIndex] || isGameOver) return;
      const newTable = table.slice();
      newTable[boxIndex] = currentPlayer;

      return {
        currentPlayer: nextPlayer,
        nextPlayer: currentPlayer,
        table: newTable,
        isDraw: newTable.every((tile) => tile),
        winner: getGameStatus(newTable) ? currentPlayer : null,
        isGameOver: getGameStatus(newTable),
      };
    });
  }

  render() {
    return (
      <div>
        <Tiles
          table={this.state.table}
          onClickListener={this.handleOnClick}
          gridSize={this.props.gridSize}
        />
        <br></br>
        <DisplayGameStatus
          currentPlayer={this.state.currentPlayer}
          gameStatus={{ winner: this.state.winner, isDraw: this.state.isDraw }}
        />
      </div>
    );
  }
}

export default TicTacToe;
