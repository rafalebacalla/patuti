import gameScene from "./src/scenes/patuti.scene.js";
import loadSprites from "./src/core/load-sprites.js";
import mainScene from "./src/scenes/main.scene.js";
import gameOverScene from "./src/scenes/game-over.scene.js";

loadSprites();

scene("menu", mainScene);
scene("game", gameScene);
scene("gameOver", gameOverScene);

go("menu");

focus();
