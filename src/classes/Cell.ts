import { Graphics } from 'pixi.js';

type CellType = {
  size: number;
  x: number;
  y: number;
};

interface Cell extends CellType {
  graphics: Graphics;
}

class Cell extends Graphics {
  constructor({ size, x, y }: CellType) {
    super();
    this.graphics = new Graphics();
    this.size = size;
    this.x = x;
    this.y = y;
  }

  addEventListeners() {
    this.graphics.addListener('mouseover', () => {
      // ignore the cells that are offset to the left
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
