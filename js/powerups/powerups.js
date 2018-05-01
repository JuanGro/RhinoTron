/*
  *This function is supposed to improve some player's speed when a powerup is collected
*/
function resetPlayerSpeed(player){
  if(player == 'player_1'){
    player_1_speed = 2;
  } else if (player == 'player_2'){
    player_2_speed = 2;
  }
}

function powerUpSpeed(player){
  console.log('Ejecuta la funcion');
  if(player == 'player_1'){
    player_1_speed = 6;
    setTimeout(resetPlayerSpeed(player), 10000);
  } else if (player == 'player_2'){
    player_2_speed = 6;
    setTimeout(resetPlayerSpeed(player), 10000);
  }
}
