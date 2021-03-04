import * as PIXI from 'pixi.js';
import Grid from '../Grid';
import Menu from '../Menu';
import Scene, { SceneType } from '../Engine/Scene';
import Sprite from '../Entity/Sprite';
// import { pizzaFrames } from '../../assets/images/loader';
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
    // console.log(heroJson);
    // console.log(this.app.loader.resources);
    // const sheet = new PIXI.Spritesheet(
    //   this.app.loader.resources[heroImage].texture.baseTexture,
    //   heroJson
    // );
    // const sheet = this.app.loader.resources['../../assets/images/hero/hero.json'];
    // const hero = sheet.textures && new PIXI.Sprite(sheet.textures['barbarian_1_crouch_001.png']);
    // const sheet = this.app.loader.resources[heroJson];
    // PIXI.Loader.shared.add(heroImage).load(() => {
    //   const sheet = new PIXI.Spritesheet(
    //     PIXI.Loader.shared.resources[heroImage].texture.baseTexture,
    //     heroJson
    //   );
    // const hero = new Sprite({
    //   texture: sheet.textures['barbarian_1_crouch_001.png'],
    //   x: 0,
    //   y: 0,
    // });
    // console.log(sheet);
    // const hero = new PIXI.Sprite(sheet.textures['barbarian_1_crouch_001.png']);

    // this.app.stage.addChild(hero);
    // sheet.parse((...args) => {
    // console.log('args', Object.values(args[0])[3]);
    // const hero = new Sprite({ texture: Object.values(args[0])[3].baseTexture.resource.url, x: 0, y:0 });
    // });
    // });
    const pizza = new Sprite({
      texture: this.app.loader.resources[pizzaImage].texture,
      x: 0,
      y: 0,
    });
    // const hero = new Sprite({
    //   texture: this.app.loader.resources[heroImage].texture,
    //   x: 0,
    //   y: 0,
    // });
    // const hero = new PIXI.Sprite(sheet.textures['barbarian_1_crouch_001.png']);
    this.app.stage.addChild(pizza);
    // this.app.stage.addChild(hero);
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
    // console.log(pizzaFrames.pizza[0]);
    // this.app.loader.add(pizzaFrames.pizza[0]).load(() => this.create());
    this.app.loader
      .add(pizzaImage)
      .add(heroImage)
      // .add(heroImage, heroJson.meta.image)
      // .add(heroJson)
      .load(() => this.create());

    // const data = require('../assets/spriteSheets/plane/plane.json');
    // this.app.loader.add(heroImage).load((loader, resources) => {
    //   const sheet = new PIXI.Spritesheet(resources[heroImage].texture.baseTexture, heroJson);
    //   sheet.parse((...args) => {
    //     // done!
    //     console.log('args', args);
    //   });
    // });
  }
}

export type { LevelType };
export default Level;
