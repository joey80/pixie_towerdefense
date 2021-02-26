import { Application } from 'pixi.js';

type GameObjectType = {
  height: number;
  width: number;
};

interface GameObject extends GameObjectType {}

class GameObject implements GameObjectType {
  constructor({ height, width }: GameObjectType) {
    this.height = height;
    this.width = width;
  }

  init() {
    return new Application({
      backgroundColor: 0xffffff,
      height: this.height,
      resolution: devicePixelRatio,
      width: this.width,
    });
  }
}

export type { GameObject as GameObjectType };
export default GameObject;
