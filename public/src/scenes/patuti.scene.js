// import k from "../../kaboom.js";
import { k } from "../../main.js";
import movement from "../core/movement.js";
import controls from "../core/controls.js";


export default () => {
    const { add, pos, rect, color, origin, collides, layers, solid, area } = k;
    // layers(['bg', 'area', 'player'])
    const player = add([
        pos(k.width() * 0.5, k.height() * 0.5),
        rect(16,16),
        color(0, 1, 0, 1),
        origin('center'),
        area(),
        // body(),
        movement(),
        controls(),
    ])

    const ground = add([
        pos(k.width() * 0.5, k.height() * 0.6),
        rect(70,16),
        color(0, 1, 0, 1),
        origin('center'),
        area(),
        // solid(),
    ])
    // collides("player", "ground", () => {
    //     console.log("collide");
    // });
}