import { PATUTI } from "../core/constants.js";

export default function playerControls(){
    return {
        add(){
            let isDucking = false;
            let isPreparingJump = false;
            keyPress("left", () => {
                if(this.grounded() && !isPreparingJump && !isDucking){
                    this.play("left");
                    this.play("keepLeft");
                }
            });
            keyDown("left", () => {
                if(!isPreparingJump && !isDucking){
                    this.move(-PATUTI.MS, 0);
                    this.dir = vec2(-1, 0);
                }
            });

            keyPress("right", () => {
                if(this.grounded() && !isPreparingJump && !isDucking){
                    this.play("right");
                    this.play("keepRight");
                }
            })
            keyDown("right", () => {
                if(!isPreparingJump && !isDucking){
                    this.move(PATUTI.MS, 0);
                    this.dir = vec2(1, 0);
                }
            });

            keyRelease("right", () => {
                if(this.grounded()){
                    this.play("idling");
                }
            });
            keyRelease("left", () => {
                if(this.grounded()){
                    this.play("idling");
                }
            });

            keyDown("up", () => {
                this.play('prepareJump')
                this.play('prepareJumpIdle')
                isPreparingJump = true;
            });

            keyRelease("up", () => {
                // if(this.grounded()){
                    this.play('jump')
                    this.jump(PATUTI.JUMP_FORCE);
                    isPreparingJump = false;
                // }
            });

            keyPress("down", () => {
                if(this.grounded()){
                    this.play("prepareDuck");
                    this.play("duckIdle");
                    isDucking = true;
                }
            })

            keyRelease("down", () => {
                if(this.grounded()){
                    this.play("idling");
                    isDucking = false;
                }
            });

        }
    }
}

