
import gameScene from './src/scenes/patuti.scene.js';
import loadSprites from './src/core/load-sprites.js'
import mainScene from './src/scenes/main.scene.js';


loadSprites();


scene("menu", mainScene)

// Init Scenes
scene("game", gameScene);

go("menu");
// scene("gameOver", gameOverScene);

focus();

