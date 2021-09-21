import k from "../core/kaboom.js";
import controls from "../functions/controls.js";
import { AREA_SCALE, PATUTI_SCALE, BG_SCALE, GAME } from "../core/constants.js";

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
    sprite("patuti", { anims: "idle" }),
    layer("game"),
    scale(PATUTI_SCALE),
    pos(k.width() * 0.5, k.height() * 0.3),
    origin("center"),
    area(scale(0.4, 0.85)),
    body(),
    controls(),
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
      !keyIsDown("left") &&
      !keyIsDown("right") &&
      !keyIsDown("up") &&
      !keyIsDown("down") &&
      patuti.grounded()
    ) {
      patuti.play("jump");
    }
  });
};
