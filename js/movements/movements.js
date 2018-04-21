function drawTail(motorcycle_position_x, motorcycle_position_y, motorcycle_position_z, orientation_player, player) {
    if (orientation_player == 1 || orientation_player == 3) geometry = new THREE.BoxGeometry(tail_width, tail_length, tail_height);
    if (orientation_player == 2 || orientation_player == 4) geometry = new THREE.BoxGeometry(tail_length, tail_width, tail_height);

    if (player == "player_1") material = new THREE.MeshBasicMaterial({color: player_1_color});
    if (player == "player_2") material = new THREE.MeshBasicMaterial({color: player_2_color});
    cube = new THREE.Mesh(geometry, material);

    cube.position.x = motorcycle_position_x;
    cube.position.y = motorcycle_position_y;
    cube.position.z = motorcycle_position_z;

    tail_objects.push(cube);
    scene.add(cube);

    tail_player_1.push(
        buildTailStringPos(motorcycle_position_x, motorcycle_position_y, motorcycle_position_z)
    );
}

function continuosMovement(current_motorcycle, opponent_motorcycle, player, player_orientation, player_camera) {
    player_camera.position.x = current_motorcycle.position.x;
    player_camera.position.y = current_motorcycle.position.y - camera_remoteness;
    player_camera.position.z = camera_position_in_z;
    player_camera.rotation.x = Math.PI / 2;

    if(player_orientation == 1) {
        current_motorcycle.position.y += speed;
        player_camera.position.y = current_motorcycle.position.y - camera_remoteness;
    } else if(player_orientation == 2) {
        current_motorcycle.position.x += speed;
        player_camera.position.x = current_motorcycle.position.x - camera_remoteness;
    } else if(player_orientation == 3) {
        current_motorcycle.position. y -= speed;
        player_camera.position.y = current_motorcycle.position.y + camera_remoteness;
    } else if(player_orientation == 4) {
        current_motorcycle.position.x -= speed;
        player_camera.position.x = current_motorcycle.position.x + camera_remoteness;
    }

    collisions(current_motorcycle, opponent_motorcycle, player_orientation, player);

    drawTail(current_motorcycle.position.x,
             current_motorcycle.position.y,
             current_motorcycle.position.z,
             player_orientation,
             player);
}

function moveCameraToCurrentMotorcycle(player_cam, current_moto, player_orient){
    player_cam.position.x = current_moto.position.x;
    player_cam.position.y = current_moto.position.y;

    if(player_orient == 1) {
        player_cam.position.y = current_moto.position.y - camera_remoteness;
    } else if(player_orient == 2) {
        player_cam.position.x = current_moto.position.x - camera_remoteness;
    } else if(player_orient == 3) {
        player_cam.position.y = current_moto.position.y + camera_remoteness;
    } else if(player_orient == 4) {
        player_cam.position.x = current_moto.position.x + camera_remoteness;
    }
}

function changeRotationWithPI(moto, player_cam, keychar){
  if(keychar == 'd' || keychar == 'ArrowRight'){
    moto.rotation.y -= Math.PI / 2;
    player_cam.rotation.y -= Math.PI / 2;
  }
  else if(keychar == 'a' || keychar == 'ArrowLeft'){
    moto.rotation.y += Math.PI / 2;
    player_cam.rotation.y += Math.PI / 2;
  }
}

function initMotorcycle1(current_motorcycle, opponent_motorcycle) {
    //LINEA IMPORTANTE PARA OBTENER EVENTO DEL TECLADO, ESTA TIENE QUE ESTAR AL INICIO DE TODOS LOS DOCUMENTOS, ES UN LISTENER
    document.body.addEventListener('keydown', keyPressed);

    function keyPressed(keyboardEvent) {
        switch(keyboardEvent.key) {
            case 'ArrowRight':
                player_1_orientation++;

                if(player_1_orientation > 4) {
                    player_1_orientation = 1;
                }
                moveCameraToCurrentMotorcycle(player_1_camera, current_motorcycle, player_1_orientation);
                changeRotationWithPI(current_motorcycle, player_1_camera, 'ArrowRight');
                break;
            case 'ArrowLeft':
                player_1_orientation--;

                if(player_1_orientation < 1) {
                    player_1_orientation = 4;
                }
                moveCameraToCurrentMotorcycle(player_1_camera, current_motorcycle, player_1_orientation);
                changeRotationWithPI(current_motorcycle, player_1_camera, 'ArrowLeft');
                break;
        }
        keyboardEvent.preventDefault();
        render();
    }
}

function initMotorcycle2(current_motorcycle, opponent_motorcycle) {
    //LINEA IMPORTANTE PARA OBTENER EVENTO DEL TECLADO, ESTA TIENE QUE ESTAR AL INICIO DE TODOS LOS DOCUMENTOS, ES UN LISTENER
    document.body.addEventListener('keydown', keyPressed);

    function keyPressed(keyboardEvent) {
        switch(keyboardEvent.key) {
            case 'd':
                player_2_orientation++;

                if(player_2_orientation > 4) {
                    player_2_orientation = 1;
                }
                moveCameraToCurrentMotorcycle(player_2_camera, current_motorcycle, player_2_orientation);
                changeRotationWithPI(current_motorcycle, player_2_camera, 'd');
                break;
            case 'a':
                player_2_orientation--;

                if(player_2_orientation < 1) {
                    player_2_orientation = 4;
                }
                moveCameraToCurrentMotorcycle(player_2_camera, current_motorcycle, player_2_orientation);
                changeRotationWithPI(current_motorcycle, player_2_camera, 'a');
                break;
        }
        keyboardEvent.preventDefault();
        render();
    }
}
