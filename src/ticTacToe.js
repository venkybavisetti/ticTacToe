import React from 'react';
import './ticTacToe.css';

const Box = (props) => {
  return (
    <button className="box" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

class Table extends React.Component {
  renderBox(boxIndex) {
    return (
      <Box
        value={this.props.table[boxIndex]}
        onClick={() => this.props.onClick(boxIndex)}
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
    return (
      <div>
        It's <span style={{ color: 'red' }}>{props.playerTurn}</span> PlayerTurn
      </div>
    );
  }
  return (
    <div>
      <div>
        player <span style={{ color: 'red' }}>{props.playerTurn}</span> won the
        Game
      </div>
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
      playerTurn: '🟢',
      isGameOver: false,
      gridSize: 3,
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  getGameStatus(table) {
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
      if (table[a] && table[a] === table[b] && table[a] === table[c]) {
        return true;
      }
    }
    return false;
  }

  handleOnClick(boxIndex) {
    this.setState((state) => {
      if (state.table[boxIndex] || state.isGameOver) return;
      const table = state.table.slice();
      table[boxIndex] = state.playerTurn;
      const isGameOver = this.getGameStatus(table);
      return {
        table,
        playerTurn: state.playerTurn === '🟢' ? '🔴' : '🟢',
        isGameOver,
      };
    });
  }

  render() {
    return (
      <div>
        <Table
          table={this.state.table}
          onClick={this.handleOnClick}
          gridSize={this.state.gridSize}
        />
        <br></br>
        <DisplayGameStatus
          playerTurn={this.state.playerTurn}
          isGameOver={this.state.isGameOver}
        />
      </div>
    );
  }
}

export default TicTacToe;
