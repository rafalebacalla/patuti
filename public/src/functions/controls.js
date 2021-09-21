import { PATUTI } from "../core/constants.js";

export default function playerControls(){
    return {
        add(){
        
            keyPress("left", () => {
                this.play("left");
            });
            keyDown("left", () => {
                this.move(-PATUTI.MS, 0);
                this.dir = vec2(-1, 0);
            });

            keyPress("right", () => {
                this.play("right");
            })
            keyDown("right", () => {
                this.move(PATUTI.MS, 0);
                this.dir = vec2(1, 0);
            });

            // keyRelease(["right", "left"], () => {
            //     this.play("idle");
            // });

            keyPress("up", () => {
                if(this.grounded()){
                    this.jump(PATUTI.JUMP_FORCE);
                }
            });

            keyPress("down", () => {
                this.play("duck");
            });

        }
    }
}

