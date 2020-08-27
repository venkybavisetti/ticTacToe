const getCrossAxis = (gridSize) => {
  let crossLeftAxis = [];
  let crossRightAxis = [];

  const totalBoxes = Math.pow(gridSize, 2);
  for (let rowAxis = 0; rowAxis <= totalBoxes - 1; rowAxis += gridSize + 1) {
    crossLeftAxis.push(rowAxis);
  }

  for (
    let rowAxis = totalBoxes - gridSize;
    0 < rowAxis;
    rowAxis -= gridSize - 1
  ) {
    crossRightAxis.push(rowAxis);
  }

  return [crossLeftAxis, crossRightAxis];
};

const getXYAxis = (gridSize) => {
  let axis = [];
  for (let row = 0; row < gridSize; row++) {
    const xAxis = [];
    const yAxis = [];
    for (let colum = 0; colum < gridSize; colum++) {
      xAxis.push(colum + row * gridSize);
      yAxis.push(row + colum * gridSize);
    }
    axis.push(xAxis, yAxis);
  }
  return axis.slice();
};

const getWinningArray = (gridSize) => {
  let xyAxis = getXYAxis(gridSize);
  let crossAxis = getCrossAxis(gridSize);
  return [...xyAxis, ...crossAxis];
};

export default getWinningArray;
