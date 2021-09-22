import k from "../core/kaboom.js";
import { BULLET } from "../core/constants.js";

// pos y patuti
// pos x patuti
//
export default function spawnUtil(x, y){
    let size = parseInt(rand(1, 6));
    let direction = parseInt(rand(0, 3));
    let dir = undefined;
    let speed = BULLET.MS;
    let sp = "";
    let bs = 0;
    let tag = "";

    if (direction == 0) {
      x = width() * 0;
      dir = RIGHT;
      sp = "bullet_hr";
    } else if (direction == 1) {
      x = width() * 0.9;
      dir = LEFT; 
      sp = "bullet_h";
    } else {
      y = height() * 0;
      dir = DOWN;
      sp = "bullet_v";
    }

    if (size == 5) {
      bs = BULLET.BIG_SCALE;
      tag = "bigBullet";
    } else {
      bs = BULLET.SMALL_SCALE;
      tag = "bullet";
    }

    return {
        x, y, dir, speed, sp, bs, tag
    }
}