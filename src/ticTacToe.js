import React from 'react';
import './ticTacToe.css';
import getWinningArray from './utilities';

const Box = (props) => {
  return (
    <button className="box" onClick={props.onClickListener}>
      {props.value}
    </button>
  );
};

class Table extends React.Component {
  renderBox(boxIndex) {
    return (
      <Box
        value={this.props.table[boxIndex]}
        onClickListener={() => this.props.onClickListener(boxIndex)}
        key={boxIndex}
      />
    );
  }

  render() {
    let children = [];
    for (let row = 0; row < this.props.gridSize; row++) {
      let rowChild = [];
      for (let colum = 0; colum < this.props.gridSize; colum++) {
        rowChild.push(this.renderBox(colum + row * this.props.gridSize));
      }
      children.push(
        <div className="row" key={row}>
          {rowChild}
        </div>
      );
    }
    return <div>{children}</div>;
  }
}

const DisplayGameStatus = (props) => {
  if (!props.isGameOver) {
    return <div>It's {props.playerTurn} PlayerTurn</div>;
  }
  return (
    <div>
      <div>player {props.playerTurn} won the Game</div>
      <button
        style={{ cursor: 'pointer' }}
        onClick={() => window.location.reload()}
      >
        Play Again
      </button>
    </div>
  );
};

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [],
      playerTurn: true,
      isGameOver: false,
      gridSize: 3,
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  getGameStatus(table) {
    const lines = getWinningArray(this.state.gridSize);
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
      let areInLine = lines[lineIndex].every(
        (box) => table[box] && table[box] === table[lines[lineIndex][0]]
      );
      if (areInLine) return areInLine;
    }
    return false;
  }

  handleOnClick(boxIndex) {
    this.setState((state) => {
      if (state.table[boxIndex] || state.isGameOver) return;
      const table = state.table.slice();
      table[boxIndex] = state.playerTurn ? '🟢' : '🔴';
      const isGameOver = this.getGameStatus(table);
      return {
        table,
        playerTurn: isGameOver ? state.playerTurn : !state.playerTurn,
        isGameOver,
      };
    });
  }

  render() {
    return (
      <div>
        <Table
          table={this.state.table}
          onClickListener={this.handleOnClick}
          gridSize={this.state.gridSize}
        />
        <br></br>
        <DisplayGameStatus
          playerTurn={this.state.playerTurn ? '🟢' : '🔴'}
          isGameOver={this.state.isGameOver}
        />
      </div>
    );
  }
}

export default TicTacToe;
