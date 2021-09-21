import k from "./kaboom.js";
import movement from "./src/core/movement.js";
import controls from "./src/core/controls.js";



loadSprite("idle", "../sprites/idle-1.png", {
    sliceX: 1,
    sliceY: 2,
    anims: {
        idle: {
            from: 0,
            to: 1,
        },
    },
});

loadSprite("area", "../sprites/area.png");
loadSprite("bg", "../sprites/background.png");

// layers(['bg'])

const { add, pos, rect, color, origin, collides, layers, solid, area, resolve } = k;

scene('game', () => {



    const player = add([
        sprite("idle"),
        play("idle"),
        scale(0.5),
        pos(k.width() * 0.5, k.height() * 0.5),
        // rect(16,16),
        // color(127, 200, 255),
        origin('center'),
        area(),
        body(),
        movement(),
        controls(),
    ])
    
    // player.action(() => {
    //     player.resolve();
    // });

    
    // const ground = add([
    //     sprite("area"),
    //     scale(0.8),
    //     pos(k.width() * 0.5, k.height() * 0.65),
    //     // rect(500,800),
    //     // color(127, 200, 255),
    //     origin('center'),
    //     area(),
    //     solid(),
    // ])
    
    

});


focus();

start('game');