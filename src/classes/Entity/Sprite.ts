import { Sprite as PixiSprite, Texture } from 'pixi.js';

interface SpriteType {
  texture: Texture;
  x: number;
  y: number;
}

class Sprite extends PixiSprite {
  constructor({ texture, x, y }: SpriteType) {
    super(texture);
    this.texture = texture;
    this.x = x;
    this.y = y;
  }

  init() {
    return new PixiSprite(this.texture);
  }
}

export type { SpriteType };
export default Sprite;
