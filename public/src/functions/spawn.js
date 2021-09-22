import { GAME } from "../core/constants.js";
import { BULLET } from "../core/constants.js";

// pos y patuti
// pos x patuti
//
export default function spawn(dir, patuti, size) {
  // 1 = horizontal right to left
  let x = patuti.x;
  let y = patuti.y;
  let spawnPos = {};
  let moveConf = {};
  let spriteS = "";
  let bScale = !!size ? BULLET.BIG_SCALE : BULLET.SMALL_SCALE;
  let tag = !!size ? "bigBullet" : "bullet";
  if (dir == 1) {
    spriteS = "bullet_h";
    spawnPos = {
      x: 1500,
      y,
    };
    moveConf = {
      dir: 0,
      speed: -BULLET.MS,
    };
  } else if (dir == 2) {
    // 2 = vertical
    spriteS = "bullet_v";
    spawnPos = {
      x,
      y: 20,
    };
    moveConf = {
      dir: 90,
      speed: BULLET.MS,
    };
  } else if (dir == 3) {
    // horizontal left to right
    spriteS = "bullet_hr";
    spawnPos = {
      x: 50,
      y,
    };
    moveConf = {
      dir: 0,
      speed: BULLET.MS,
    };
  }

  return {
    spawn() {
      wait(1, () => {
        add([
          `${tag}`,
          sprite(spriteS),
          pos(spawnPos.x, spawnPos.y),
          origin("center"),
          area(),
          scale(bScale),
          move(moveConf.dir, moveConf.speed),
        ]);
      });
    },
  };
}
