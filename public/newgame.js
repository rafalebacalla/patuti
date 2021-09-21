import k from './src/core/kaboom.js'
import loadSprites from "./src/core/load-sprites.js";
import patutiScene from './src/scenes/patuti.scene.js';



loadSprites();

scene("game", patutiScene);


focus();

go("game");
