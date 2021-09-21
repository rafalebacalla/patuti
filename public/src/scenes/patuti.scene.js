import k from "../core/kaboom.js";
import controls from "../functions/controls.js";
import { AREA_SCALE, PATUTI_SCALE, BG_SCALE, GAME } from "../core/constants.js";
import spawn from "../functions/spawn.js"

let isGrounded = true;

export default () => {
  layers(["bg", "game", "ui"], "game");

  add([
    sprite("bg"),
    layer("bg"),
    pos(k.width() * 0.5, k.height() * 0.5),
    origin("center"),
    scale(1),
  ]);

  const patuti = add([
    "patuti",
    controls(),
    sprite("patuti", { anims: 'idling' }),
    layer("game"),
    scale(PATUTI_SCALE),
    pos(k.width() * 0.5, k.height() * 0.6),
    origin("center"),
    area(scale(0.4, 0.80)),
    body(),
  ]);

  add([
    sprite("area"),
    layer("game"),
    scale(AREA_SCALE),
    pos(k.width() * 0.5, k.height() * 0.8),
    origin("center"),
    area(),
    solid(),
  ]);

  patuti.action(() => {
    if (
      patuti.grounded() &&
      !keyIsDown("left") &&
      !keyIsDown("right") &&
      !keyIsDown("up") &&
      !keyIsDown("down")
    ) {
        patuti.play("idling");
    }

    if(patuti.falling() && !patuti.grounded()){
        patuti.play("falling")
    }

  });

    // Spawn vertical
    loop(6, () =>  {
        let x = patuti.pos.x;
        let y = patuti.pos.y;
        const spawner = add([
            spawn(x, y, 2),
        ])
        spawner.spawn(x, y, 2);
    });
    // Spawn horizontal right to left
    loop(4, () =>  {
        let x = patuti.pos.x;
        let y = patuti.pos.y;
        const spawner = add([
            spawn(x, y, 1),
        ])
        spawner.spawn(x, y, 1);
    });

    // Spawn horizontal left to right
    loop(2, () =>  {
        let x = patuti.pos.x;
        let y = patuti.pos.y;
        const spawner = add([
            spawn(x, y, 3),
        ])
        spawner.spawn(x, y, 3);
    });




    collides("patuti", "bullet", () => {
        addKaboom(patuti.pos);
        shake(3);
        // destroy('bullet')
    });


//   


};
