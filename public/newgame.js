import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";
import loadSprites from "./load-sprites.js";

const k = kaboom({
  width: 1280,
  height: 720,
  // scale: 1,
  debug: true,
  font: "sinko",
  // clearColor: [0, 0, 0, 1],
  global: true,
  // fullscreen: true,
});

const MOVE_SPEED = 300;
const PATUTI_SCALE = 0.6;
const AREA_SCALE = 0.8;

loadSprites();

// loadSprite("idle", "../sprites/idle-1.png", {
//   sliceX: 1,
//   sliceY: 2,
//   anims: {
//     idle: {
//       from: 0,
//       to: 1,
//     },
//   },
// });
// loadSprite("moving-left", "../sprites/left-1.png", {
//   sliceX: 1,
//   sliceY: 5,
//   anims: {
//     left: {
//       from: 0,
//       to: 4,
//     },
//   },
// });
// loadSprite("moving-right", "../sprites/right-1.png", {
//   sliceX: 2,
//   sliceY: 3,
//   anims: {
//     right: {
//       from: 0,
//       to: 4,
//     },
//   },
// });
// loadSprite("jumping", "../sprites/jump-1.png", {
//   sliceX: 1,
//   sliceY: 7,
//   anims: {
//     jump: {
//       from: 0,
//       to: 6,
//     },
//     fall: {
//       from: 4,
//       to: 6,
//     },
//   },
// });
// loadSprite("ducking", "../sprites/duck-1.png", {
//   sliceX: 1,
//   sliceY: 4,
//   anims: {
//     duck: {
//       from: 0,
//       to: 3,
//     },
//     stay: {
//       from: 3,
//       to: 3,
//     },
//   },
// });

// loadSprite("area", "../sprites/area.png");
// loadSprite("bg", "../sprites/background.png");

// const map = [
//   "                              ",
//   "                              ",
//   "                              ",
//   "                              ",
//   "                              ",
//   "              =               ",
//   "                              ",
//   "                              ",
// ];

// const levelConfig = {
//   width: 32,
//   height: 32,
//   "=": () => [sprite("area"), solid(), scale(1),"area"],
// };


scene("game", () => {

  layers([
    "bg",
    "game",
    "ui",
  ], "game");

  // addLevel(map, levelConfig);

  add([sprite('bg'), layer('bg')])

  const player = add([
    sprite("idle"),
    scale(0.3),
    pos(k.width() * 0.5, k.height() * 0.3),
    // rect(16,16),
    // color(127, 200, 255),
    origin("center"),
    area(),
    body(),
  ]);

  add([
    sprite("area"),
    scale(0.8),
    pos(k.width() * 0.5, k.height() * 0.7),
    // rect(60, 16),
    // color(127, 200, 255),
    origin("center"),
    area(),
    solid()
  ]);

  // CONTROLS
  // Left
  keyDown("left", () => {
    player.move(-MOVE_SPEED, 0);
    player.dir = vec2(-1, 0);
  });
  keyPress("left", () => {
    player.changeSprite("moving-left");
    player.play("left");
  });
  keyRelease("left", () => {
    player.changeSprite("idle");
    player.play("idle");
  });
  // Right
  keyDown("right", () => {
    player.move(MOVE_SPEED, 0);
    player.dir = vec2(1, 0);
  });
  keyPress("right", () => {
    player.changeSprite("moving-right");
    player.play("right");
  });
  keyRelease("right", () => {
    player.changeSprite("idle");
    player.play("idle");
  });
  // Jump
  keyDown("up", () => {
    if(player.grounded()){
      player.jump();
      player.changeSprite("jumping");
      player.play("jump");
    // if(player.falling()){
    //   player.changeSprite("jumping");
    //   player.play("falling");
    //   console.log("falling")
    // }
    }
  });
  keyRelease("up", () => {
    player.changeSprite("idle");
    player.play("idle");
  });

  // if(player.falling()){
  //   player.changeSprite("jumping");
  //   player.play("falling");
  //   console.log("falling")
  // }

  // Down
  keyDown("down", () => {
    player.changeSprite("ducking");
    player.play("stay");
  });
  keyPress("down", () => {
    player.pos.y += 50;
    player.changeSprite("ducking");
    player.play("duck");
  });
  keyRelease("down", () => {
    player.changeSprite("idle");
    player.play("idle");
    player.pos.y -= 30;
  });
});

focus();

go("game");
