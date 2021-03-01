import { Sprite as PixiSprite, Texture } from 'pixi.js';

type SpriteType = {
  texture: Texture;
  x: number;
  y: number;
};

interface Sprite extends SpriteType {}

class Sprite extends PixiSprite {
  constructor({ texture, x, y }: SpriteType) {
    super(texture);
    this.texture = texture;
    this.x = x;
    this.y = y;

    return new PixiSprite(texture);
  }
}

export type { SpriteType };
export default Sprite;
