function collision_wall(current_motorcycle, opponent_motorcycle, orientation, player) {
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

      	randomPosition(current_motorcycle , opponent_motorcycle, 0, environment_size / 4, orientation);

        if(player == "player_1") {
          player_1_lifes--;
        }

        if(player == "player_2") {
          player_2_lifes--;
        }

        if (player_1_lifes < 0 || player_2_lifes < 0) {
          window.location.replace("./../index.html");
        } else {
          document.getElementById("player_1_scoreboard").innerHTML = player_1_lifes;
          document.getElementById("player_2_scoreboard").innerHTML = player_2_lifes;
        }
    }
}