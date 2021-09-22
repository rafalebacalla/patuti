import k from "../core/kaboom.js";

// function calculateScore(hp, time){
//     return (hp * 100) + (tim)
// }

export default (timeSurvived) => {
  layers(["bg", "game", "ui"], "game");

  add([
    text("GAME OVER", {
      size: 42,
    }),
    pos(k.width() * 0.5, k.height() * 0.4),
    origin("center"),
  ]);

  let score = parseInt(timeSurvived * 100);
  let highScore = localStorage.getItem("highScore");

  if (highScore < score) {
    localStorage.setItem("highScore", score);
    add([
      layer("ui"),
      text(`NEW HIGH SCORE: ${score}`, {
        size: 36,
      }),
      pos(k.width() * 0.5, k.height() * 0.6),
      origin("center"),
    ]);
  } else {
    add([
      layer("ui"),
      text(`SCORE: ${score}`, {
        size: 36,
      }),
      pos(k.width() * 0.5, k.height() * 0.6),
      origin("center"),
    ]);
  }

  add([
    text("Press SPACE to play again.", {
      size: 24,
    }),
    pos(k.width() * 0.5, k.height() * 0.7),
    origin("center"),
  ]);

  keyPress("space", () => {
    score = 0;
    highScore = 0;
    const oldTime = timeSurvived;
    go("game", oldTime);
  });
};
