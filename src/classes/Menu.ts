import { Container, Graphics } from 'pixi.js';

type MenuType = {
  height: number;
  width: number;
  x: number;
  y: number;
};

interface Menu extends MenuType {
  graphics: Graphics;
  menuHeight: number;
  menuWidth: number;
}

class Menu extends Graphics {
  constructor({ height, width, x, y }: MenuType) {
    super();
    this.graphics = new Graphics();
    this.menuHeight = height;
    this.menuWidth = width;
    this.x = x;
    this.y = y;
  }

  init() {
    const container = new Container();

    this.graphics.beginFill(0x327da8);
    this.graphics.drawRect(this.x, this.y, this.menuWidth, this.menuHeight);

    container.addChild(this.graphics);
    return container;
  }
}

export type { MenuType };

export default Menu;
