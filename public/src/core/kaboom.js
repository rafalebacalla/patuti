import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";

import { GAME } from "./constants.js";

const kaboomConf = {
  width: GAME.W,
  height: GAME.H,
  scale: GAME.S,
  debug: true,
  font: "sinko",
  global: true,
  // fullScreen: true,
};

const k = kaboom(kaboomConf);
export default k;