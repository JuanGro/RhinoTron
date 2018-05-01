function removeLife(player) {

  var playerColor;

  if(player == "player_1") {
    player_1_lifes--;

    // PARA CAMBIAR COLOR DEL MARCADOR
    player1=document.getElementById("player_1_scoreboard");
    player1.style.visibility = "visible";
    changeColorMarker(player1,player_1_lifes);
  }

  if(player == "player_2") {
    player_2_lifes--;
    //document.getElementById("player_2_scoreboard");

    player2=document.getElementById("player_2_scoreboard");
    player2.style.visibility = "visible";
    changeColorMarker(player2,player_2_lifes);
    
  }


  if (player_1_lifes < 0 || player_2_lifes < 0) {
    window.location.replace("./../pages/gameOver.html");
  } else {
    document.getElementById("player_1_scoreboard").innerHTML = player_1_lifes;
    document.getElementById("player_2_scoreboard").innerHTML = player_2_lifes;


  }
}


function changeColorMarker(idplayer,lifes){

    if(lifes==2){

      idplayer.style.color="yellow";

    }else if(lifes==1){

      idplayer.style.color="red";

    }else if(lifes==0){

        idplayer.style.color="Maroon";

      
    }


}







/*
<div id="blink1" class="highlight">New item!</div>
<script type="text/javascript">
<!--
// blink "on" state
function show()
{
  if (document.getElementById)
  document.getElementById("blink1").style.visibility = "visible";
}
// blink "off" state
function hide()
{
  if (document.getElementById)
  document.getElementById("blink1").style.visibility = "hidden";
}
// toggle "on" and "off" states every 450 ms to achieve a blink effect
// end after 4500 ms (less than five seconds)
for(var i=900; i < 1000000; i=i+900)
{
  setTimeout("hide()",i);
  setTimeout("show()",i+450);
}
-->
</script>

 */










function removeTails(scene, tails_array) {
  while(tails_array.length > 0) {
    scene.remove(tails_array.pop());
  }
  tail_player_1 = [];
}

function initializeScene(player, current_motorcycle, opponent_motorcycle, environment_size, orientation, scene, tail_objects) {
  removeLife(player);
  removeTails(scene, tail_objects);
  randomPosition(current_motorcycle, opponent_motorcycle, 0, environment_size / 4, orientation);
}

function collisions(current_motorcycle, opponent_motorcycle, orientation, player) {
    /* Wall collisions */
    if(current_motorcycle.position.x > environment_size / 2 ||
      current_motorcycle.position.x < -environment_size / 2 ||
      current_motorcycle.position.y >  environment_size / 2 ||
      current_motorcycle.position.y < -environment_size / 2 ) {
      initializeScene(player,
                      current_motorcycle,
                      opponent_motorcycle,
                      environment_size,
                      orientation,
                      scene,
                      tail_objects);
    }

    /* Tail collisions */
    if(tail_player_1.includes(
      buildTailStringPos(current_motorcycle.position.x, current_motorcycle.position.y, current_motorcycle.position.z)
    )) {
      initializeScene(player,
                      current_motorcycle,
                      opponent_motorcycle,
                      environment_size,
                      orientation,
                      scene,
                      tail_objects);
  }
}