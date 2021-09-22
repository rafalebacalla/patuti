export default () => {
  return [
    loadSprite("patuti", "../sprites/patuti.png", {
      sliceX: 1,
      sliceY: 24,
      anims: {
        prepareDuck: {
          from: 0,
          to: 3,
          loop: true,
        },
        duckIdle: {
          from: 4,
          to: 4,
          loop: true,
        },
        stay: {
          from: 4,
          to: 4,
          loop: true,
        },
        idling: {
          from: 5,
          to: 6,
          loop: true,
        },
        prepareJump: {
          from: 7,
          to: 9,
          loop: true,
        },
        prepareJumpIdle: {
          from: 9,
          to: 9,
          loop: true,
        },
        jump: {
          from: 10,
          to: 11,
          loop: true,
        },
        falling: {
          from: 12,
          to: 12,
          loop: true,
        },
        left: {
          from: 14,
          to: 18,
          loop: true,
        },
        keepLeft: {
          from: 15,
          to: 18,
          loop: true,
        },
        keepRight: {
          from: 20,
          to: 23,
          loop: true,
        },
        right: {
          from: 19,
          to: 23,
          loop: true,
        },
      },
    }),
    loadSprite("area", "../sprites/area.png"),
    loadSprite("bg", "../sprites/background.png"),
    loadSprite("bullet_h", "../sprites/bullet_h.png"),
    loadSprite("bullet_hr", "../sprites/bullet_hr.png"),
    loadSprite("bullet_v", "../sprites/bullet_v.png"),
  ];
};
