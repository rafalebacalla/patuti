export function goIdle(patuti){
    if(!keyIsDown("left") && !keyIsDown("right") && !keyIsDown("up") && !keyIsDown("down") && patuti.grounded()){
        this.play("idle");
    }
}

