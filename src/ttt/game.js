import React from 'react';
import TicTacToe from './ticTacToe';

const GetRadioTypeOption = (props) => {
  return (
    <div>
      <input type="radio" value={props.value} name="level" />
      {props.displayOption}
    </div>
  );
};

const Options = (props) => (
  <div className="options" onChange={props.onChange}>
    <GetRadioTypeOption value="simple" displayOption="Simple" />
    <GetRadioTypeOption value="medium" displayOption="Medium" />
    <GetRadioTypeOption value="hard" displayOption="Hard" />
  </div>
);

const PlayBtn = (props) => (
  <button className="optionBtn" onClick={props.onClick}>
    Play
  </button>
);

class ChoseLevel extends React.Component {
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
        <Options onChange={this.onChangeValue} />
        <PlayBtn onClick={this.handleOnClick} />
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { level: null };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(option) {
    this.setState({ level: option });
  }

  render() {
    if (!this.state.level) {
      return <ChoseLevel onClick={this.handleOnClick} />;
    }

    const gridSizes = { simple: 3, medium: 4, hard: 5 };
    return (
      <div className="gameBoard">
        <h3> Your Playing {this.state.level} Mode </h3>
        <TicTacToe gridSize={gridSizes[this.state.level]} />
      </div>
    );
  }
}

export default Game;
