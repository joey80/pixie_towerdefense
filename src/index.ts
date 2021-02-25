import * as PIXI from 'pixi.js';
import { pizzaFrames } from './assets/images/loader';

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new PIXI.Application();
document.body.appendChild(app.view);

// This `setup` function will run when the image has loaded
const setup = () => {
  // Create the pizza sprite
  const pizza = new PIXI.Sprite(app.loader.resources[pizzaFrames.pizza[0]].texture);
  //Add the cat to the stage
  app.stage.addChild(pizza);
};

// load an image and run the `setup` function when it's done
app.loader.add(pizzaFrames.pizza[0]).load(setup);
