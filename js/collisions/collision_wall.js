function collision_wall(current_motorcycle, opponent_motorcycle,orientation) {
    if(current_motorcycle.position.y > environment_size / 2 || current_motorcycle.position.y < -environment_size / 2 || current_motorcycle.position.x > environment_size / 2 || current_motorcycle.position.x < -environment_size / 2) {
        /*POSIBLE POWER UP
      	current_motorcycle.position.x=-current_motorcycle.position.x;
      	current_motorcycle.position.y=-current_motorcycle.position.y;
      	current_motorcycle.position.z=0;
        */
        /*current_motorcycle.position.x=0;
      	current_motorcycle.position.y=0;
      	current_motorcycle.position.z=0;
      	*/

      	randomPosition(current_motorcycle , opponent_motorcycle, 0, environment_size / 4,orientation);

        lifes--;

        if (lifes < 0) {
          window.location.replace("./../index.html");
        } else {
          document.getElementById("Marcador_player1").innerHTML = lifes;
          document.getElementById("Marcador_player2").innerHTML = 3;
        }
    }
}