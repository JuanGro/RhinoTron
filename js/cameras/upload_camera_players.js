function setCamerasPosition(player_camera, motorcycle) {
    player_camera.position.x = motorcycle.position.x;
    player_camera.position.y = motorcycle.position.y;
    player_camera.position.z = motorcycle.position.z;
    player_camera.rotation.x = Math.PI / 2;
}