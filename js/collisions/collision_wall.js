function collision_wall(motorcycle) {
    if(motorcycle.position.y > environment_size / 2 || motorcycle.position.y < -environment_size / 2 || motorcycle.position.x > environment_size / 2 || motorcycle.position.x < -environment_size / 2) {
        console.log("Te saliste alv");
    } else {
        console.log(motorcycle.position.x, motorcycle.position.y);
    }
}