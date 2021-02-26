import GameObject from './classes/Engine/GameObject';
import Level from './classes/Levels/Level';

const gameobject = new GameObject({ height: 720, width: 1280 });
const app = gameobject.init();
document.body.appendChild(app.view);

const scene = new Level(app);
scene.init();
