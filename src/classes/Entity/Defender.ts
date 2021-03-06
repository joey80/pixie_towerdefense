import SpriteSheet, { SpriteSheetType } from './SpriteSheet';
import heroJson from '../../assets/images/hero/hero.json';

type DefenderType = {};

interface Defender extends SpriteSheetType {}

class Defender extends SpriteSheet {
  constructor({ texture, x, y }: Pick<SpriteSheetType, 'texture' | 'x' | 'y'>) {
    super({ jsonData: heroJson, defaultSprite: 'barbarian_1_crouch_001.png', texture, x, y });
    this.texture = texture;
    this.x = x;
    this.y = y;
  }
}

export type { DefenderType };
export default Defender;
