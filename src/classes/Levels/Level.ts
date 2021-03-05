import Grid from '../Grid';
import Menu from '../Menu';
import Scene, { SceneType } from '../Engine/Scene';
import Sprite from '../Entity/Sprite';
import SpriteSheet from '../Entity/SpriteSheet';
import heroJson from '../../assets/images/hero/hero.json';
import heroImage from '../../assets/images/hero/hero.png';
import pizzaImage from '../../assets/images/pizza.png';

type LevelType = {};

interface Level extends LevelType, SceneType {}

class Level extends Scene implements LevelType {
  constructor(app: SceneType['app']) {
    super(app);
    this.app = app;
  }

  create() {
    const hero = new SpriteSheet({
      defaultSprite: 'barbarian_1_crouch_001.png',
      jsonData: heroJson,
      texture: this.app.loader.resources[heroImage].texture.baseTexture,
      x: 700,
      y: 50,
    }).init();

    const pizza = new Sprite({
      texture: this.app.loader.resources[pizzaImage].texture,
      x: 0,
      y: 0,
    });

    this.app.stage.addChild(pizza, hero);
  }

  createGrid() {
    this.app.stage.addChild(new Grid({ height: this.height, size: 120, width: this.width }).init());
  }

  createMenu() {
    this.app.stage.addChild(new Menu({ height: 120, width: this.width, x: 0, y: 0 }).init());
  }

  init() {
    super.init();
    this.preloadAssets();
    this.createGrid();
    this.createMenu();
  }

  preloadAssets() {
    this.app.loader
      .add(pizzaImage)
      .add(heroImage)
      .load(() => this.create());
  }
}

export type { LevelType };
export default Level;
