import k from "../kaboom";

export default function movement() {
    const { vec2 } = k;
    const direction = vec2(0,0);
    const speed = 1;
    return {
        // add(){
        //     this.movement.right();
        // },
        update() {
            if(!this.pos){
                return;
            }
            this.pos.x += direction.x * speed;
            this.pos.y += direction.y * speed;
        },
        movement: {
            left() {
                direction.x = -2;
                direction.y = 0;
            },
            right() {
                direction.x = 2;
                direction.y = 0;
            },
            stop() {
                direction.x = 0;
            }
        }
    }
}