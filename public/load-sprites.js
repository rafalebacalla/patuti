export default function loadSprites(){
    return [     
        loadSprite("idle", "../sprites/idle-1.png", {
            sliceX: 1,
            sliceY: 2,
            anims: {
            idle: {
                from: 0,
                to: 1,
            },
            },
        }),
        loadSprite("moving-left", "../sprites/left-1.png", {
            sliceX: 1,
            sliceY: 5,
            anims: {
            left: {
                from: 0,
                to: 4,
            },
            },
        }),
        loadSprite("moving-right", "../sprites/right-1.png", {
            sliceX: 2,
            sliceY: 3,
            anims: {
            right: {
                from: 0,
                to: 4,
            },
            },
        }),
        loadSprite("jumping", "../sprites/jump-1.png", {
            sliceX: 1,
            sliceY: 7,
            anims: {
            jump: {
                from: 0,
                to: 6,
            },
            fall: {
                from: 4,
                to: 6,
            },
            },
        }),
        loadSprite("ducking", "../sprites/duck-1.png", {
            sliceX: 1,
            sliceY: 4,
            anims: {
            duck: {
                from: 0,
                to: 3,
            },
            stay: {
                from: 3,
                to: 3,
            },
            },
        }),
        loadSprite("area", "../sprites/area.png"),
        loadSprite("bg", "../sprites/background.png"),
    ]
}