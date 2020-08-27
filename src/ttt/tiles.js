import React from 'react';

const Tile = (props) => {
  return (
    <button className="box" onClick={props.onClickListener}>
      {props.value}
    </button>
  );
};

class Tiles extends React.Component {
  renderBox(boxIndex) {
    return (
      <Tile
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

export default Tiles;
