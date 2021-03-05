import { Sprite as PixiSprite, Texture } from 'pixi.js';

type SpriteType = {
  texture: Texture;
  x: number;
  y: number;
};

interface Sprite extends SpriteType {
  sprite: PixiSprite;
}

class Sprite extends PixiSprite {
  constructor({ texture, x, y }: SpriteType) {
    super(texture);
    this.texture = texture;
    this.x = x;
    this.y = y;
    this.init();
  }

  init() {
    this.sprite = new PixiSprite(this.texture);
    this.sprite.x = this.x;
    this.sprite.y = this.y;
    return this.sprite;
  }
}

export type { SpriteType };
export default Sprite;
