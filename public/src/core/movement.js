import k from "../../kaboom.js";
// import { k } from "../../main.js";

export default function movement() {
    const { vec2, action } = k;
    const direction = vec2(0,0);
    const speed = 2;
    return {
        update() {
            if(!this.pos){
                return;
            }
            this.pos.x += direction.x * speed;
            this.pos.y += direction.y * speed;
        },
        movement: {
            left() {
                direction.x = -3;
                direction.y = 0;
            },
            right() {
                direction.x = 3;
                direction.y = 0;
            },
            stop() {
                direction.x = 0;
            }
        }
    }
}