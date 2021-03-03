import { Container } from 'pixi.js';
import Cell from './Cell';

type GridType = {
  height: number;
  size: number;
  width: number;
};

interface Grid extends GridType {
  objectSize: number;
}

class Grid implements GridType {
  constructor({ height, size, width }: GridType) {
    this.height = height;
    this.objectSize = size - 3 * 2;
    this.size = size;
    this.width = width;
  }

  init() {
    const container = new Container();
    const doubleCellGap = 3 * 2;
    const horizontalOffset = -40;

    for (let y = this.size + doubleCellGap; y < this.height; y += this.size) {
      for (let x = horizontalOffset; x < this.width; x += this.size) {
        container.addChild(new Cell({ size: this.objectSize, x, y }).init());
      }
    }
    return container;
  }
}

export type { GridType };

export default Grid;
