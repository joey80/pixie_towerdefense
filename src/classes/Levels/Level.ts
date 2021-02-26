import * as PIXI from 'pixi.js';
import Scene, { SceneType } from '../Engine/Scene';
import { pizzaFrames } from '../../assets/images/loader';

type LevelType = {};

interface Level extends LevelType, SceneType {}

class Level extends Scene implements LevelType {
  constructor(app: SceneType['app']) {
    super(app);
    this.app = app;
  }

  init() {
    super.init();
    const setup = () => {
      // Create the pizza sprite
      // And add it to the stage
      const pizza = new PIXI.Sprite(this.app.loader.resources[pizzaFrames.pizza[0]].texture);
      this.app.stage.addChild(pizza);
    };

    // load an image and run the `setup` function when it's done
    this.app.loader.add(pizzaFrames.pizza[0]).load(setup);
  }
}

export type { LevelType };
export default Level;
