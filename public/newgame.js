import k from './src/core/kaboom.js'
import patutiScene from './src/scenes/patuti.scene.js';
import loadSprites from './src/core/load-sprites.js'

loadSprites();

// loadSprite("area", "../sprites/area.png"),
// loadSprite("bg", "../sprites/background.png"),

scene("game", patutiScene);


focus();

go("game");
