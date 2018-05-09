function removeLife(player) {
  if (player == "player_1") {
    player_1_lifes--;
    changeColorMarker(player_1_scoreboard, player_1_lifes);
  } else {
    player_2_lifes--;
    changeColorMarker(player_2_scoreboard, player_2_lifes);
  }

  if (player_1_lifes < 0 || player_2_lifes < 0) window.location.replace("./gameOver.html");
  else {
    player_1_scoreboard.innerHTML = player_1_lifes;
    player_2_scoreboard.innerHTML = player_2_lifes;
  }
}

function changeColorMarker(idPlayer, lifes){
    if (lifes == 2) idPlayer.style.color = "yellow";
    else if (lifes == 1) idPlayer.style.color = "red";
    else if (lifes == 0) idPlayer.style.color = "Maroon";
}

function removeTailObjects(scene, tail_objects) {
  while (tail_objects.length > 0) scene.remove(tail_objects.pop());
}

function removeTailStrings(tail_strings) {
  while (tail_strings.length > 0) tail_strings.pop();
}

function initializeScene(player, current_motorcycle, opponent_motorcycle, environment_size, orientation, scene, tail_objects) {
  removeLife(player);
  removeTailObjects(scene, tail_objects);
  removeTailStrings(tail_strings);
  randomPosition(current_motorcycle, opponent_motorcycle, 0, environment_size / 4, orientation);
  player_1_tail_flag = 0;
  player_2_tail_flag = 0;
}

function collisions(current_motorcycle, opponent_motorcycle, orientation, player, tail_flag) {
  /* Wall collisions */
  if (current_motorcycle.position.x > environment_size / 2 ||
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
  else if (tail_strings.includes(
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