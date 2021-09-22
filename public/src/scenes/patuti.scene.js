import k from "../core/kaboom.js";
import controls from "../functions/controls.js";
import { AREA_SCALE, PATUTI, GAME } from "../core/constants.js";
import spawnUtil from "../functions/spawn-util.js";

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
    pos(k.width() * 0.33, k.height() * 0.6),
    origin("center"),
    area(scale(0.4, 0.8)),
    body(),
    health(10),
  ]);

  add([
    sprite("area"),
    layer("game"),
    scale(AREA_SCALE),
    pos(k.width() * 0.33, k.height() * 0.85),
    origin("center"),
    area(),
    solid(),
  ]);

  add([
    sprite("area"),
    layer("game"),
    scale(AREA_SCALE),
    pos(k.width() * 0.66, k.height() * 0.85),
    origin("center"),
    area(),
    solid(),
  ]);

  const hpText = add([
    layer("ui"),
    text("HP: 10", {
      size: 36,
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
    const { x, y, dir, speed, sp, bs, tag } = spawnUtil(
      patuti.pos.x,
      patuti.pos.y
    );
    add([
      `${tag}`,
      sprite(sp),
      pos(x, y),
      origin("center"),
      area(),
      scale(bs),
      move(dir, speed),
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
  });

  patuti.collides("bigBullet", (bigBullet) => {
    addKaboom(patuti.pos);
    shake(20);
    destroy(bigBullet);
    patuti.hurt(5);
    hpText.value -= 5;
    hpText.text = "HP:" + hpText.value;
  });

  collides("bigBullet", "bigBullet", (bigBullet) => {
    shake(30);
    addKaboom(bigBullet.pos);
    addKaboom(bigBullet.pos);
    addKaboom(bigBullet.pos);
    destroy(bigBullet);
  });

  collides("bullet", "bigBullet", (bullet) => {
    shake(5);
    addKaboom(bullet.pos);
    destroy(bullet);
  });

  collides("bullet", "bullet", (bullet) => {
    shake(5);
    addKaboom(bullet.pos);
    destroy(bullet);
  });
};

function gameOver(oldTime) {
  let timeSurvived = time();
  if (!!oldTime) {
    timeSurvived -= oldTime;
  }
  go("gameOver", timeSurvived);
}
