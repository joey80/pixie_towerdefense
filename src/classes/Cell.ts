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

  addEventListeners() {
    this.graphics.addListener('mouseover', () => {
      if (this.x > 0) {
        this.graphics.clear();
        this.drawCell(true);
      }
    });

    this.graphics.addListener('mouseout', () => {
      this.graphics.clear();
      this.drawCell();
    });
  }

  drawCell(isHovering?: boolean) {
    this.graphics.beginFill(0xffffff);
    this.graphics.lineStyle(3, isHovering ? 0x000000 : 0xffffff);
    this.graphics.drawRect(this.x, this.y, this.size, this.size);
  }

  init() {
    this.graphics.interactive = true;
    this.drawCell();
    this.addEventListeners();
    return this.graphics;
  }
}

export type { CellType };

export default Cell;
