function isThereAWall(current_motorcycle, orientation) {
    // 1 up
    if (orientation == 1) {
        if (current_motorcycle.position.y + speed >= environment_size / 2) return true;
        else return false;
    // 2 right
    } else if (orientation == 2) {
        if (current_motorcycle.position.x + speed >= environment_size / 2) return true;
        else return false;
    // 3 dowm
    } else if (orientation == 3) {
        if (current_motorcycle.position.y - speed <= -environment_size / 2) return true;
        else return false;
    // 4 left
    } else {
        if (current_motorcycle.position.x - speed <= -environment_size / 2) return true;
        else return false;
    }
}

function isThereATail(current_motorcycle, orientation) {
    // 1 up
    if (orientation == 1) {
        if (tail_strings.includes(buildTailStringPos(current_motorcycle.position.x, current_motorcycle.position.y + speed, current_motorcycle.position.z))) return true;
        else return false;
    // 2 right
    } else if (orientation == 2) {
        if (tail_strings.includes(buildTailStringPos(current_motorcycle.position.x + speed, current_motorcycle.position.y, current_motorcycle.position.z))) return true;
        else return false;
    // 3 down
    } else if (orientation == 3) {
        if (tail_strings.includes(buildTailStringPos(current_motorcycle.position.x, current_motorcycle.position.y - speed, current_motorcycle.position.z))) return true;
        else return false;
    // 4 left
    } else {
        if (tail_strings.includes(buildTailStringPos(current_motorcycle.position.x - speed, current_motorcycle.position.y, current_motorcycle.position.z))) return true;
        else return false;
    }
}