import k from "../core/kaboom.js";
import controls from "../functions/controls.js";
import { AREA_SCALE, PATUTI_SCALE, BG_SCALE } from "../core/constants.js";

export default () => {

    layers([
      "bg",
      "game",
      "ui",
    ], "game");

    add([
        sprite('bg'), 
        layer('bg'),
        scale(BG_SCALE),
    ])

    const patuti = add([
      "patuti",
      sprite("patuti"),
      scale(PATUTI_SCALE),
      pos(k.width() * 0.5, k.height() * 0.3),
      origin("center"),
      area(scale(0.4, 1)),
      body(),
      controls(),
    ]);

    add([
      sprite("area"),
      scale(AREA_SCALE),
      pos(k.width() * 0.5, k.height() * 0.7),
      origin("center"),
      area(),
      solid()
    ]);

  }