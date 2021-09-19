import k from "../kaboom";
import movement from "../core/movement";
import controls from "../core/controls";


export default patutiScene = () => {
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
        rect(64,16),
        color(0, 1, 0, 1),
        origin('center'),
        area(),
        // solid(),
    ])
    // collides("player", "ground", () => {
    //     console.log("collide");
    // });
}