import { Graphics } from 'pixi.js';

type CellType = {
  graphics: Graphics;
  size: number;
  x: number;
  y: number;
};

interface Cell extends CellType {}

class Cell extends Graphics {
  constructor({ size, x, y }: Omit<CellType, 'graphics'>) {
    super();
    this.graphics = new Graphics();
    this.size = size;
    this.x = x;
    this.y = y;
  }

  init() {
    this.graphics.beginFill(0xffffff);
    this.graphics.lineStyle(5, 0x000000);
    this.graphics.drawRect(this.x, this.y, this.size, this.size);
    return this.graphics;
  }
}

export type { CellType };

export default Cell;
