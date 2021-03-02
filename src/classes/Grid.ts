import { Container } from 'pixi.js';
import Cell from './Cell';

type GridType = {
  cellGap: number;
  gameGrid: Array<Cell>;
  height: number;
  objectSize: number;
  size: number;
  width: number;
};

interface Grid extends GridType {}

class Grid implements GridType {
  constructor({ height, size, width }: Pick<GridType, 'height' | 'size' | 'width'>) {
    this.cellGap = 3;
    this.height = height;
    this.gameGrid = [];
    this.objectSize = size - 3 * 2;
    this.size = size;
    this.width = width;
  }

  init() {
    const container = new Container();
    for (let y = this.size; y < this.height; y += this.size) {
      for (let x = 0; x < this.width; x += this.size) {
        container.addChild(new Cell({ size: this.size, x, y }).init());
      }
    }
    return container;
  }
}

export type { GridType };

export default Grid;
