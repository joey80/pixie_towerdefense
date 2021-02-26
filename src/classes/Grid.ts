type GridType = {
  size: number;
  x: number;
  y: number;
};

interface Grid extends GridType {}

class Grid implements GridType {
  constructor({ size, x, y }: GridType) {
    this.size = size;
    this.x = x;
    this.y = y;
  }
}

export type { GridType };

export default Grid;
