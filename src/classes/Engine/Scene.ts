import { Application } from 'pixi.js';

type SceneType = {
  app: Application;
  tick: number;
};

interface Scene extends SceneType {}

class Scene implements SceneType {
  constructor(app: SceneType['app']) {
    this.app = app;
    this.tick = 0;
  }

  init() {
    this.app.ticker.add(delta => this.update(delta));
  }

  update(delta: number) {
    this.tick = delta;
  }
}

export type { SceneType };
export default Scene;
