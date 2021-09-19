import kaboom from "kaboom";
import mainScene from "./scenes/main.scene";

const kaboomConf = {
  width: 340,
  height: 240,
  scale: 3,
  stretch: true,
  letterbox: true,
  font: "sinko",
//   clearColor: [0, 0, 0, 1],
  global: true,
};

const k = kaboom(kaboomConf);

// init main scene
k.scene("main", mainScene());


// k.scene("start game", () => {
//     // k.add([
//     //     k.text("START", 32),
//     //     k.pos(k.width() * 0.5, k.height() * 0.5),
//     //     k.origin('center')
//     // ]);

//     // add a floor
// 	k.add([
// 		k.pos(0, k.height()),
// 		k.rect(k.width(), 50),
// 		k.solid()
// 	])
// });

// action(() => {
//     if (keyIsDown("left")) {
//         k.start('start game');
//     }
// });


k.start('main');
