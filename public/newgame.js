import k from './src/core/kaboom.js'
import patutiScene from './src/scenes/patuti.scene.js';



// loadSprites();
loadSprite("patuti", "../sprites/patuti.png", {
  sliceX: 1,
  sliceY: 24,
  anims: {
      duck: {
          from: 0,
          to: 4,
          loop: false,
      },
      idle: {
          from: 5,
          to: 6,
          loop: true,
      },
      jump: {
          from: 7,
          to: 13,
      },
      left: {
          from: 14,
          to: 18,
          loop: true,
      },
      right: {
          from: 19,
          to: 23,
          loop: true,
      }
  }
}),
loadSprite("area", "../sprites/area.png"),
loadSprite("bg", "../sprites/background.png"),

scene("game", patutiScene);


focus();

go("game");
