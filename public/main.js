import k from "./kaboom.js";
// import patutiScene from "./src/scenes/patuti.scene.js"
import movement from "./src/core/movement.js";
import controls from "./src/core/controls.js";

// import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";

// const kaboomConf = {
//   width: 340,
//   height: 240,
// //   scale: 1,
//   stretch: true,
//   letterbox: true,
//   font: "sinko",
//   global: true,
// };

// export var k = kaboom(kaboomConf);

const { add, pos, rect, color, origin, collides, layers, solid, area } = k;
const player = add([
    pos(k.width() * 0.5, k.height() * 0.5),
    rect(16,16),
    color(127, 200, 255),
    origin('center'),
    area(),
    body(),
    movement(),
    controls(),
])

const ground = add([
    pos(k.width() * 0.5, k.height() * 0.6),
    rect(500,16),
    color(127, 200, 255),
    origin('center'),
    area(),
    solid(),
])

focus();