function removeLife(player) {
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

function collisions(current_motorcycle, opponent_motorcycle, orientation, player) {
    /* Wall collisions */
    if(current_motorcycle.position.x > environment_size / 2 ||
      current_motorcycle.position.x < -environment_size / 2 ||
      current_motorcycle.position.y >  environment_size / 2 ||
      current_motorcycle.position.y < -environment_size / 2 ) {
        removeLife(player);
        randomPosition(current_motorcycle , opponent_motorcycle, 0, environment_size / 4, orientation);
    }

    /* Tail collisions */
    if(tail_player_1.includes(
      current_motorcycle.position.x.toFixed(decimals_to_check).toString().concat(
      "x",
      current_motorcycle.position.y.toFixed(decimals_to_check).toString(),
      "y",
      current_motorcycle.position.z.toFixed(decimals_to_check).toString(),
      "z"
    ))) {
        removeLife(player);
        randomPosition(current_motorcycle , opponent_motorcycle, 0, environment_size / 4, orientation);
  }
}