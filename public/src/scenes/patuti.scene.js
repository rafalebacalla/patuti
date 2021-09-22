import k from "../core/kaboom.js";
import controls from "../functions/controls.js";
import { AREA_SCALE, PATUTI, GAME } from "../core/constants.js";
import spawn from "../functions/spawn.js";

export default (oldTime) => {
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
    sprite("patuti", { anims: "idling" }),
    layer("game"),
    scale(PATUTI.SCALE),
    pos(k.width() * 0.5, k.height() * 0.6),
    origin("center"),
    area(scale(0.4, 0.8)),
    body(),
    health(10),
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

  const hpText = add([
    layer("ui"),
    text("HP: 10", {
      size: 24,
    }),
    pos(k.width() * 0.1, k.height() * 0.1),
    {
      value: 10,
    },
    origin("center"),
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

    if (patuti.falling() && !patuti.grounded()) {
      patuti.play("falling");
    }

    if (
      patuti.pos.y >= GAME.H ||
      patuti.pos.y <= -200 ||
      patuti.pos.x >= GAME.W ||
      patuti.pos.x <= 0
    ) {
      gameOver(oldTime);
    }
  });

  patuti.on("death", () => {
    destroy(patuti);
    gameOver(oldTime);
  });

  // Spawn vertical
  loop(7, () => {
    const spawner = add([spawn(2, patuti.pos)]);
    spawner.spawn(2, patuti.pos);
  });
  // Spawn horizontal right to left
  loop(4, () => {
    const spawner = add([spawn(1, patuti.pos)]);
    spawner.spawn(1, patuti.pos);
  });

  // Spawn horizontal left to right
  loop(2, () => {
    const spawner = add([spawn(3, patuti.pos)]);
    spawner.spawn(3, patuti.pos);
  });

  loop(30, () => {
    const spawner = add([spawn(3, patuti.pos, 1)]);
    spawner.spawn(3, patuti.pos, 1);
  });

  collides("patuti", "bullet", () => {
    addKaboom(patuti.pos);
    shake(3);
    patuti.hurt(1);
    hpText.value--;
    hpText.text = "HP:" + hpText.value;
  });

  collides("patuti", "bigBullet", () => {
    addKaboom(patuti.pos);
    shake(15);
    patuti.hurt(3);
    hpText.value -= 3;
    hpText.text = "HP:" + hpText.value;
  });
};

function gameOver(oldTime) {
  let timeSurvived = time();
  if(!!oldTime){
    timeSurvived -= oldTime;
  }
  go("gameOver", timeSurvived);
}
