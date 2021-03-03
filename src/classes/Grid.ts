import { Container } from 'pixi.js';
import Cell from './Cell';

type GridType = {
  height: number;
  objectSize: number;
  size: number;
  width: number;
};

interface Grid extends GridType {}

class Grid implements GridType {
  constructor({ height, size, width }: Pick<GridType, 'height' | 'size' | 'width'>) {
    this.height = height;
    this.objectSize = size - 3 * 2;
    this.size = size;
    this.width = width;
  }

  init() {
    const container = new Container();
    for (let y = this.size; y < this.height; y += this.size) {
      for (let x = -40; x < this.width; x += this.size) {
        container.addChild(new Cell({ size: this.objectSize, x, y }).init());
      }
    }
    return container;
  }
}

export type { GridType };

export default Grid;
