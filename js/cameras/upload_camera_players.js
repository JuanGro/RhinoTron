function setCamerasPosition(
    player_camera,
    motorcycle,
    orientation
) {
    player_camera.position.x = motorcycle.position.x;
    player_camera.position.y = motorcycle.position.y;
    player_camera.position.z = camera_position_in_z;
    player_camera.rotation.x = Math.PI / 2;
}