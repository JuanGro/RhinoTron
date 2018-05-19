function randomPosition(current_motorcycle, opponent_motorcycle, min_position, max_position) {
    current_motorcycle.position.x = getRandomArbitrary(min_position, max_position);
    current_motorcycle.position.y = getRandomArbitrary(min_position, max_position);

    opponent_motorcycle.position.x = -current_motorcycle.position.x;
    opponent_motorcycle.position.y = -current_motorcycle.position.y;
}