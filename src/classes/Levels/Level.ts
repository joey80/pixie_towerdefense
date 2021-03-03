import Grid from '../Grid';
import Menu from '../Menu';
import Scene, { SceneType } from '../Engine/Scene';
import Sprite from '../Entity/Sprite';
import { pizzaFrames } from '../../assets/images/loader';

type LevelType = {};

interface Level extends LevelType, SceneType {}

class Level extends Scene implements LevelType {
  constructor(app: SceneType['app']) {
    super(app);
    this.app = app;
  }

  create() {
    const pizza = new Sprite({
      texture: this.app.loader.resources[pizzaFrames.pizza[0]].texture,
      x: 0,
      y: 0,
    });
    this.app.stage.addChild(pizza);
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
    this.app.loader.add(pizzaFrames.pizza[0]).load(() => this.create());
  }
}

export type { LevelType };
export default Level;
