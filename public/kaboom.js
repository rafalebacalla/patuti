// import kaboom from "../node_modules/kaboom/dist/kaboom.js";
// const kaboom = require('kaboom');
import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";

const kaboomConf = {
  width: 1280,
  height: 720,
  // scale: 2,
  // stretch: true,
  // letterbox: true,
  font: "sinko",
  clearColor: [0, 0, 0, 1],
  global: true,
  fullscreen: true,
};


export const k = kaboom(kaboomConf);
export default k;