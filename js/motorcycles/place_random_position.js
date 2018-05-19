function randomPosition(current_motorcycle, min_position, max_position) {
    current_motorcycle.position.x = Math.floor(getRandomArbitrary(min_position, max_position) / 10) * 10;
    current_motorcycle.position.y = 0;
}