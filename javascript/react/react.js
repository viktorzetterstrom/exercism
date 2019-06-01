
class InputCell {
  constructor(value) {
    this.value = value;
  }

  setValue(value) {
    this.value = value
  }

  setComputeCell(compCell) {
    this.computeCell = compCell;
  }

}

class ComputeCell {
  constructor (cells, fn) {
    this.value = fn(cells);
    cells.forEach(cell => {
      cell.setComputeCell(this);
    })
  }
}


module.exports = { InputCell, ComputeCell };
