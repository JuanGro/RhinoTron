function turnLeft(current_motorcycle) {
    player_2_orientation--;
    player_2_tail_flag = 0;
    if (player_2_orientation < 1) player_2_orientation = 4;
    moveCameraToCurrentMotorcycle(player_2_camera, current_motorcycle, player_2_orientation);
    changeRotationWithPI(current_motorcycle, player_2_camera, 'a');
}

function turnRight(current_motorcycle) {
    player_2_orientation++;
    player_2_tail_flag = 0;
    if (player_2_orientation > 4) player_2_orientation = 1;
    moveCameraToCurrentMotorcycle(player_2_camera, current_motorcycle, player_2_orientation);
    changeRotationWithPI(current_motorcycle, player_2_camera, 'd');
}

function moveMotorcycle2(current_motorcycle) {
    if (isThereAWall(current_motorcycle, player_2_orientation) || isThereATail(current_motorcycle, player_2_orientation)) {
        if (Math.random() >= 0.5) {
            // Turn right
            if (player_2_orientation == 4) next_orientation = 1;
            else next_orientation = player_2_orientation + 1;
            if (isThereATail(current_motorcycle, next_orientation) || isThereAWall(current_motorcycle, next_orientation)) turnLeft(current_motorcycle);
            else turnRight(current_motorcycle);
        } else {
            // Turn left
            if (player_2_orientation == 1) next_orientation = 4;
            else next_orientation = player_2_orientation - 1;

            if (isThereATail(current_motorcycle, next_orientation) || isThereAWall(current_motorcycle, next_orientation)) turnRight(current_motorcycle);
            else turnLeft(current_motorcycle);
        }
    }
}
