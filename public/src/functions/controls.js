import { PATUTI } from "../core/constants.js";

export default function playerControls(){
    return {
        add(){
        
            keyDown("left", () => {
                this.move(-PATUTI.MS, 0);
                this.dir = vec2(-1, 0);
                // this.play("left");
            });
            // keyPress("left", () => {
            //     this.changeSprite("moving-left");
            //     this.play("left");
            // });
            // keyRelease("left", () => {
            //     this.changeSprite("idle");
            //     this.play("idle");
            // });
            // Right
            keyDown("right", () => {
                this.move(PATUTI.MS, 0);
                this.dir = vec2(1, 0);
                // this.play("right");
            });
            // keyPress("right", () => {
            //     this.changeSprite("moving-right");
            //     this.play("right");
            // });
            // keyRelease("right", () => {
            //     this.changeSprite("idle");
            //     this.play("idle");
            // });
            // Jump
            keyDown("up", () => {
                if(this.grounded()){
                this.jump(PATUTI.JUMP_FORCE);
                // this.changeSprite("jumping");
                // this.play("jump");

                // if(this.falling()){
                //   this.changeSprite("jumping");
                //   this.play("falling");
                //   console.log("falling")
                // }

                }
            });
            // keyRelease("up", () => {
            //     this.changeSprite("idle");
            //     this.play("idle");
            // });

            // if(this.falling()){
            //   this.changeSprite("jumping");
            //   this.play("falling");
            //   console.log("falling")
            // }

            // Down
            // keyDown("down", () => {
            //     this.changeSprite("ducking");
            //     this.play("stay");
            // });
            keyPress("down", () => {
                // this.pos.y += 50;
                this.play("duck");
                // this.changeSprite("ducking");
                // this.play("duck");
            });
            // keyRelease("down", () => {
                // this.changeSprite("idle");
                // this.play("idle");
                // this.pos.y -= 30;
            // });
        }
    }
}

