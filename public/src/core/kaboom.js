import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";

import { GAME } from "./constants.js";

const W = GAME.W;
const H = GAME.H;
const S = GAME.S;

const kaboomConf = {
  width: W,
  height: H,
  scale: S,
  debug: true,
  font: "sinko",
  global: true,
};

const k = kaboom(kaboomConf);
export default k;