import k from "../kaboom";

export default mainScene = () => {
    const { add } = k;
    add([
        k.text("Patuti\nPress Space to Start", 16),
        k.pos(k.width() * 0.5, k.height() * 0.5),
        k.origin('center'),
        k.color(1, 1, 1, 1),
    ]);
}