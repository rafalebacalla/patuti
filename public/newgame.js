import k from './src/core/kaboom.js'
import patutiScene from './src/scenes/patuti.scene.js';
import loadSprites from './src/core/load-sprites.js'

loadSprites();

scene("game", patutiScene);

// scene("gameOver", gameOverScene);

focus();

go("game");


// go("gameOver");
