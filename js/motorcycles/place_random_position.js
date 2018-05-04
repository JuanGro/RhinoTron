function randomPosition(current_motorcycle, opponent_motorcycle, min_position, max_position, orientation) {
    current_motorcycle.position.x = getRandomArbitrary(min_position, max_position);
    current_motorcycle.position.y = getRandomArbitrary(min_position, max_position);
    current_motorcycle.position.z = 0;

    opponent_motorcycle.position.x = -current_motorcycle.position.x;
    opponent_motorcycle.position.y = -current_motorcycle.position.y;
    opponent_motorcycle.position.z = 0;

    setCamerasPosition(player_1_camera, current_motorcycle, orientation);
    setCamerasPosition(player_2_camera, opponent_motorcycle, orientation);
}