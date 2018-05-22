function animate() {
    if (motorcycle_1 && motorcycle_2) {
        player_1_tail_flag = continuosMovement(motorcycle_1, motorcycle_2, 1, player_1_orientation, player_1_camera, player_1_color_hex, player_1_tail_flag);
        player_2_tail_flag = continuosMovement(motorcycle_2, motorcycle_1, 2, player_2_orientation, player_2_camera, player_2_color_hex, player_2_tail_flag);
    }
    requestAnimationFrame(animate);
    render();
}

function saveModeGame() {
    localStorage.setItem("mode_game", "Multiplayer");
}