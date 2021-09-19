import k from "../kaboom";

export default function controls(){
    const { keyPress, keyRelease } = k;
    return {
        add() {
            keyPress('left', () => {
                console.log("left is keydown")
                this.movement.left();
                // this.moveTo(100, 200);
            });
            keyRelease('left', () => {
                console.log("left is released")
                this.movement.stop();
                // this.moveTo(100, 200);
            });

            keyPress('right', () => {
                this.movement.right();
                // this.moveTo(200, 100);
            });
            keyRelease('right', () => {
                console.log("right is released")
                this.movement.stop();
                // this.moveTo(100, 200);
            });

            keyPress('up', () => {
                this.jump();
            });

            keyPress('down', () => {

            });

        }   
    }
}