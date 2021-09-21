import { GAME } from "../core/constants.js";
import { BULLET } from "../core/constants.js";


// pos y patuti
// pos x patuti
// 
export default function spawn(x, y, angle) {
    // 1 = horizontal right to left
    let spawnPos = {};
    let moveConf = {};
    let spriteS = "";
    if(angle == 1){
        spriteS = "bullet_h"
        spawnPos = {
            x : 1500,
            y,
        }
        moveConf = {
            dir: 0,
            speed: -BULLET.MS,
        }
    } else if (angle == 2) { // 2 = vertical 
        spriteS = "bullet_v"
        spawnPos = {
            x,
            y : 20,
        }
        moveConf = {
            dir: 90,
            speed: BULLET.MS,
        }
    } else if (angle == 3) { // horizontal left to right
        spriteS = "bullet_hr"
        spawnPos = {
            x : 50,
            y,
        }
        moveConf = {
            dir: 0,
            speed: BULLET.MS,
        }
    }

    return {
        spawn (){
            wait(1, () => {
                add([
                    "bullet",
                    sprite(spriteS),
                    pos(spawnPos.x, spawnPos.y),
                    origin('center'),
                    area(),
                    scale(0.3),
                    move(moveConf.dir, moveConf.speed),
                    
                ])
            });
        }
    }

}
