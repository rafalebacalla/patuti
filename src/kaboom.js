import kaboom from "kaboom";

const kaboomConf = {
  width: 340,
  height: 240,
  scale: 2,
  stretch: true,
  letterbox: true,
  font: "sinko",
  clearColor: [0, 0, 0, 1],
  global: true,
  // fullscreen: true,
};
export const k = kaboom(kaboomConf);
export default k;