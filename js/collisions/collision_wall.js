function collision_wall(motorcycle) {
    if(motorcycle.position.y > environment_size / 2 || motorcycle.position.y < -environment_size / 2 || motorcycle.position.x > environment_size / 2 || motorcycle.position.x < -environment_size / 2) {
        console.log("Te saliste del mapa");

      	//motorcycle_1.position.x=0;
      	//motorcycle_1.position.y=0;
      	//motorcycle_1.position.z=0;
        
    } else {
        console.log(motorcycle.position.x, motorcycle.position.y);
    }
}