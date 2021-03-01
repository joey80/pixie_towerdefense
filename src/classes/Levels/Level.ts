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

  init() {
    super.init();
    this.preloadAssets();
  }

  preloadAssets() {
    this.app.loader.add(pizzaFrames.pizza[0]).load(() => this.create());
  }
}

export type { LevelType };
export default Level;
