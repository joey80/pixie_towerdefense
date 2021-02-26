type CellType = {
  size: number;
  x: number;
  y: number;
};

interface Cell extends CellType {}

class Cell implements CellType {
  constructor({ size, x, y }: CellType) {
    this.size = size;
    this.x = x;
    this.y = y;
  }
}

export type { CellType };

export default Cell;
