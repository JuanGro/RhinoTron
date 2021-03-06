function removeLife(player) {
  if (player == 1) {
    player_1_lifes--;
    changeColorMarker(player_1_scoreboard, player_1_lifes);
  } else {
    player_2_lifes--;
    changeColorMarker(player_2_scoreboard, player_2_lifes);
  }
  if (player_1_lifes < 0 || player_2_lifes < 0) {
    if (player_1_lifes < 0) saveWinner("Player 2");
    else saveWinner("Player 1");
    window.location.replace("./../pages/game-over.html");
  }
  else {
    if (player == 1) player_1_scoreboard.innerHTML = player_1_lifes;
    else player_2_scoreboard.innerHTML = player_2_lifes;
  }
}

function initializeScene(
  player,
  current_motorcycle,
  opponent_motorcycle,
  environment_size,
  scene,
  tail_objects,
  tail_strings
) {
  removeLife(player);
  removeTailObjects(scene, tail_objects);
  removeTailStrings(tail_strings);
  randomPosition(current_motorcycle, 0, environment_size / 4);
  randomPosition(opponent_motorcycle, -environment_size / 4, 0);
  player_1_tail_flag = 0;
  player_2_tail_flag = 0;
}

function collisions(current_motorcycle, opponent_motorcycle, orientation, player, tail_flag) {
  /* Wall collisions */
  if (
    current_motorcycle.position.x > environment_size / 2 ||
    current_motorcycle.position.x < -environment_size / 2 ||
    current_motorcycle.position.y >  environment_size / 2 ||
    current_motorcycle.position.y < -environment_size / 2
  ) {
    initializeScene(
      player,
      current_motorcycle,
      opponent_motorcycle,
      environment_size,
      scene,
      tail_objects,
      tail_strings
    );
    return 0;
  }
  /* Tail collisions */
  else if (tail_strings.includes(
    buildTailStringPos(
      current_motorcycle.position.x,
      current_motorcycle.position.y,
      current_motorcycle.position.z
    )
  )) {
    initializeScene(
      player,
      current_motorcycle,
      opponent_motorcycle,
      environment_size,
      scene,
      tail_objects,
      tail_strings
    );
    return 0;
  } else {
    return tail_flag;
  }
}