import { Application } from 'pixi.js';

type SceneType = {
  app: Application;
  height: number;
  tick: number;
  width: number;
};

interface Scene extends SceneType {}

class Scene implements SceneType {
  constructor(app: SceneType['app']) {
    this.app = app;
    this.height = app.renderer.screen.height;
    this.tick = 0;
    this.width = app.renderer.screen.width;
    this.init();
  }

  init() {
    this.app.ticker.add((delta: number) => this.update(delta));
  }

  update(delta: number) {
    this.tick = delta;
  }
}

export type { SceneType };
export default Scene;
