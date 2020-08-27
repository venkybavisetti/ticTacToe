import React from 'react';
import './ticTacToe.css';
import getWinningArray from './utilities';

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

  renderRow(rowIndex) {
    let row = [];
    for (let colum = 0; colum < this.props.gridSize; colum++) {
      row.push(this.renderBox(colum + rowIndex * this.props.gridSize));
    }
    return row;
  }

  render() {
    let children = [];

    for (let rowIndex = 0; rowIndex < this.props.gridSize; rowIndex++) {
      const row = this.renderRow(rowIndex);
      children.push(
        <div className="row" key={rowIndex}>
          {row}
        </div>
      );
    }
    return <div>{children}</div>;
  }
}

const getGameStatus = (table, gridSize) => {
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
      table: [],
      playerTurn: true,
      isGameOver: false,
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(boxIndex) {
    this.setState((state) => {
      if (state.table[boxIndex] || state.isGameOver) return;
      const table = state.table.slice();
      table[boxIndex] = state.playerTurn ? '🟢' : '🔴';
      const isGameOver = getGameStatus(table, this.props.gridSize);
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
          gridSize={this.props.gridSize}
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

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = { option: null };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  handleOnClick() {
    this.props.onClick(this.state.option);
  }

  onChangeValue(event) {
    this.setState({ option: event.target.value });
  }

  render() {
    return (
      <div className="gameBoard">
        <div className="options" onChange={this.onChangeValue}>
          <span>
            <input type="radio" value="simple" name="level" /> Simple
          </span>
          <span>
            <input type="radio" value="medium" name="level" /> Medium
          </span>
          <span>
            <input type="radio" value="hard" name="level" /> Hard
          </span>
        </div>
        <button className="optionBtn" onClick={this.handleOnClick}>
          Play
        </button>
      </div>
    );
  }
}

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { level: null };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(option) {
    this.setState({ level: option });
  }

  render() {
    if (this.state.level) {
      const gridSizes = { simple: 3, medium: 4, hard: 5 };
      return (
        <div className="gameBoard">
          <h3> Your Playing {this.state.level} Mode </h3>
          <TicTacToe gridSize={gridSizes[this.state.level]} />
        </div>
      );
    }

    return <Options onClick={this.handleOnClick} />;
  }
}

export default Screen;
