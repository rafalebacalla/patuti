import k from "../../kaboom.js";
// import { k } from "../../main.js";

export default function controls(){
    const { keyPress, keyRelease, keyIsDown } = k;
    return {
        add() {
            keyPress('left', () => {
                this.movement.left();
            });
            keyRelease('left', () => {
                this.movement.stop();
            });

            keyPress('right', () => {
                this.movement.right();
            });
            keyRelease('right', () => {
                this.movement.stop();
            });

            keyPress('up', () => {
                this.jump();
            });

            keyPress('space', () => {
                this.jump();
            });

            keyPress('down', () => {

            });

        }   
    }
}