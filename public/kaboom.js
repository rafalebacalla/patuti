import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";
// import {kaboom} from "https://kaboomjs.com/lib/0.5.0/kaboom.js";

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