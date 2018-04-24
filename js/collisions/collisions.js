function removeLife(player) {
  if(player == "player_1") {
    player_1_lifes--;
  } else if(player == "player_2") {
    player_2_lifes--;
  }

  if (player_1_lifes < 0 || player_2_lifes < 0) {
    window.location.replace("./../index.html");
  } else {
    document.getElementById("player_1_scoreboard").innerHTML = player_1_lifes;
    document.getElementById("player_2_scoreboard").innerHTML = player_2_lifes;
  }
}

function removeTails(scene, tails_array) {
  while(tails_array.length > 0) {
    scene.remove(tails_array.pop());
  }
  while(tail_strings.length > 0) {
    tail_strings.pop();
  }
}

function initializeScene(player, current_motorcycle, opponent_motorcycle, environment_size, orientation, scene, tail_objects) {
  removeLife(player);
  removeTails(scene, tail_objects);
  randomPosition(current_motorcycle, opponent_motorcycle, 0, environment_size / 4, orientation);
  player_1_tail_flag = 0;
  player_2_tail_flag = 0;
}

function collisions(current_motorcycle, opponent_motorcycle, orientation, player, tail_flag) {
  /* Wall collisions */
  if(current_motorcycle.position.x > environment_size / 2 ||
    current_motorcycle.position.x < -environment_size / 2 ||
    current_motorcycle.position.y >  environment_size / 2 ||
    current_motorcycle.position.y < -environment_size / 2 ) {
    initializeScene(
      player,
      current_motorcycle,
      opponent_motorcycle,
      environment_size,
      orientation,
      scene,
      tail_objects
    );
    return 0;
  }
  /* Tail collisions */
  else if(tail_strings.includes(
    buildTailStringPos(current_motorcycle.position.x, current_motorcycle.position.y, current_motorcycle.position.z)
  )) {
    initializeScene(
      player,
      current_motorcycle,
      opponent_motorcycle,
      environment_size,
      orientation,
      scene,
      tail_objects
    );
    return 0;
  } else {
    return tail_flag;
  }
}