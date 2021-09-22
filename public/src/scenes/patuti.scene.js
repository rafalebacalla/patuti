import k from "../core/kaboom.js";
import controls from "../functions/controls.js";
import { AREA_SCALE, PATUTI, GAME, BULLET } from "../core/constants.js";
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

  spawnBullet();
  spawnBullet();
  function spawnBullet() {
    let x = patuti.pos.x;
    let y = patuti.pos.y;


    let size = parseInt(rand(1, 5));
    let direction = parseInt(rand(0, 3));
    let posConfig = { x: undefined, y: undefined };
    let moveConfig = { dir: undefined, speed: BULLET.MS };
    let spriteConfig = "";
    let bulletScale = 0;
    let tag = "";

    if (direction == 0) {
      posConfig = { x: width() * 0, y };
      moveConfig = { dir: RIGHT, speed: BULLET.MS };
      spriteConfig = "bullet_hr";
    } else if (direction == 1) {
      posConfig = { x: width() * 0.9, y };
      moveConfig = { dir: LEFT, speed: BULLET.MS };
      spriteConfig = "bullet_h";
    } else {
      posConfig = { x, y: height() * 0 };
      moveConfig = { dir: DOWN, speed: BULLET.MS };
      spriteConfig = "bullet_v";
    }

    if (size == 4) {
      bulletScale = BULLET.BIG_SCALE;
      tag = "bigBullet";
    } else {
      bulletScale = BULLET.SMALL_SCALE;
      tag = "bullet";
    }

    add([
      `${tag}`,
      sprite(spriteConfig),
      pos(posConfig.x, posConfig.y),
      origin("center"),
      area(),
      scale(bulletScale),
      move(moveConfig.dir, moveConfig.speed),
    ]),
      wait(rand(0, 5), () => {
        spawnBullet();
      });
  }

  patuti.collides("bullet", (bullet) => {
    addKaboom(patuti.pos);
    shake(3);
    destroy(bullet);
    patuti.hurt(1);
    hpText.value--;
    hpText.text = "HP:" + hpText.value;
  })

  patuti.collides("bigBullet", (bigBullet) => {
    addKaboom(patuti.pos);
    shake(20);
    destroy(bigBullet);
    patuti.hurt(5);
    hpText.value -= 5;
    hpText.text = "HP:" + hpText.value;
  });
};

function gameOver(oldTime) {
  let timeSurvived = time();
  if (!!oldTime) {
    timeSurvived -= oldTime;
  }
  go("gameOver", timeSurvived);
}
