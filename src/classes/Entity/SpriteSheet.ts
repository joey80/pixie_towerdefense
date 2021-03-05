import { Spritesheet as PixiSpriteSheet, BaseTexture } from 'pixi.js';
import Sprite from './Sprite';

type SpriteSheetType = {
  defaultSprite: string;
  jsonData: object;
  texture: BaseTexture;
  x: number;
  y: number;
};

interface SpriteSheet extends SpriteSheetType {
  sprite: ReturnType<Sprite['init']>;
  spreadsheet: PixiSpriteSheet;
}

class SpriteSheet extends PixiSpriteSheet {
  constructor({ jsonData, defaultSprite, texture, x, y }: SpriteSheetType) {
    super(texture, jsonData);
    this.defaultSprite = defaultSprite;
    this.jsonData = jsonData;
    this.texture = texture;
    this.x = x;
    this.y = y;
    this.init();
  }

  init() {
    this.spreadsheet = new PixiSpriteSheet(this.texture, this.data);
    this.spreadsheet.parse((...args) => {
      return (this.sprite = new Sprite({
        texture: args[0][this.defaultSprite],
        x: this.x,
        y: this.y,
      }));
    });
    return this.sprite;
  }
}

export type { SpriteSheetType };
export default SpriteSheet;
