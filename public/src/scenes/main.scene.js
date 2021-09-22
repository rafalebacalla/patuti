import k from "../core/kaboom.js"
import { PATUTI } from '../core/constants.js'
import { PATUTI_SCALE } from '../core/constants.js'

export default () => {
    layers(["bg", "game", "ui"], "game");

    add([
      text("Patuti", {
          size: 42,
      }),
      pos(k.width() * 0.5, k.height() * 0.1),
      
      origin("center"),
    ]);

    const patuti = add([
        "patuti",
        sprite("patuti"),
        layer("game"),
        scale(PATUTI_SCALE),
        pos(k.width() * 0.1, k.height() * 0.25),
        origin("center"),
        area(scale(0.4, 0.80)),
        // move(PATUTI.MS, 0),
        move(0, PATUTI.MS/4),
        // body(),
      ]);
    patuti.play("keepRight");
    add([
        "bullet",
        sprite("bullet_hr"),
        pos(k.width() * 0.01 , k.height() * 0.25),
        origin('center'),
        area(),
        scale(1),
        move(0, PATUTI.MS/4),
    ])

    add([
      text(
        "How to Play\nArrow Keys for movement\nPatuti can jump in the air\nAvoid Bullets as much as you can\nDo not fall or leave the screen.",
        { size: 36 }
      ),
      pos(k.width() * 0.5, k.height() * 0.5),
      origin("center"),
    ]);

    add([
        text(
          "SPACE to play",
          { size: 24 }
        ),
        pos(k.width() * 0.5, k.height() * 0.7),
        origin("center"),
    ]);

    add([
        text(
          "Turn on hardware acceleration for smoother gameplay",
          { size: 24 }
        ),
        pos(k.width() * 0.5, k.height() * 0.8),
        origin("center"),
    ]);

    add([
        text(
          "Created by Rafale Bacalla using KaboomJS, Node, and Express",
          { size: 22 }
        ),
        pos(k.width() * 0.5, k.height() * 0.9),
        origin("center"),
    ]);

    add([
        sprite("bg"),
        layer("bg"),
        pos(k.width() * 0.5, k.height() * 0.5),
        origin("center"),
        scale(1),
    ]);

    keyPress("space", () => {
      go("game");
    });
}