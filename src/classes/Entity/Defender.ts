import Sprite, { SpriteType } from './Sprite';

type DefenderType = {};

interface Defender extends SpriteType {}

class Defender extends Sprite {
  constructor({ texture, x, y }: SpriteType) {
    super({ texture, x, y });
    this.texture = texture;
    this.x = x;
    this.y = y;

    return new Sprite({ texture, x, y });
  }
}

export type { DefenderType };
export default Defender;
