/* The place where the game mode is saved is in the animate.js or animate-AI.js file */
document.getElementById("winner").innerHTML = getFromLocalStorage("winner") + " wins!";

function retry() {
    if (getFromLocalStorage("mode_game") == "AI") window.location.href = './../../pages/game-AI.html';
    else if (getFromLocalStorage("mode_game") == "Multiplayer") window.location.href = './../../pages/game.html';
}