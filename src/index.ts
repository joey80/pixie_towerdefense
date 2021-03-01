import GameObject from './classes/Engine/GameObject';
import Level from './classes/Levels/Level';

const app = new GameObject({ height: 720, width: 1280 }).init();
document.body.appendChild(app.view);

const scene = new Level(app);
