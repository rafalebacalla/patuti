import k from "../core/kaboom.js";

export default (score) => {
  layers(["bg", "game", "ui"], "game");

  add([
    text("GAME OVER", {
      size: 42,
    }),
    pos(k.width() * 0.5, k.height() * 0.4),
    origin("center"),
  ]);

  const scoreText = add([
    layer("ui"),
    text("SCORE: 10", {
      size: 36,
    }),
    pos(k.width() * 0.5, k.height() * 0.6),
    {
      value: 10,
    },
    origin("center"),
  ]);

  // add([
  //     sprite("bg"),
  //     layer("bg"),
  //     pos(k.width() * 0.5, k.height() * 0.5),
  //     origin("center"),
  //     scale(1),
  // ]);

  keyPress("space", () => {
    go("game");
  });
};
