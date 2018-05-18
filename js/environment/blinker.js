function show() {
    if (document.getElementById && player_1_lifes == 0) document.getElementById("player_1_scoreboard").style.visibility = "visible";
    if (document.getElementById && player_2_lifes == 0) document.getElementById("player_2_scoreboard").style.visibility = "visible";
}

function hide() {
    if (document.getElementById && player_1_lifes == 0) document.getElementById("player_1_scoreboard").style.visibility = "hidden";
    if (document.getElementById && player_2_lifes == 0) document.getElementById("player_2_scoreboard").style.visibility = "hidden";      
}