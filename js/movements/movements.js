function drawTail(motorcycle_position_x, motorcycle_position_y, motorcycle_position_z, player, player_orientation, player_color, tail_flag) {
    if(tail_flag == 0) {
        cube = new THREE.Mesh(
            new THREE.BoxGeometry(tail_width, tail_length, tail_height),
            new THREE.MeshBasicMaterial({color: player_color})
        );

        cube.position.x = motorcycle_position_x;
        cube.position.y = motorcycle_position_y;
        cube.position.z = motorcycle_position_z;

        // Add to objects list to remove them when someone lost
        tail_objects.push(cube);
        scene.add(cube);

        if (player == "player_1") player_1_tail_object = cube;
        else if (player == "player_2") player_2_tail_object = cube;
    } else {
        if(player == "player_1") {
            if(player_orientation == 1) {
                player_1_tail_object.position.y = motorcycle_position_y - player_1_tail_object.scale.y / 2;
                player_1_tail_object.scale.y += speed;
            }
            else if(player_1_orientation == 2) {
                player_1_tail_object.position.x = motorcycle_position_x + player_1_tail_object.scale.x / 2;
                player_1_tail_object.scale.x -= speed;
            }
            else if(player_orientation == 3) {
                player_1_tail_object.position.y = motorcycle_position_y + player_1_tail_object.scale.y / 2;
                player_1_tail_object.scale.y += speed;
            }
            else if(player_1_orientation == 4) {
                player_1_tail_object.position.x = motorcycle_position_x + player_1_tail_object.scale.x / 2;
                player_1_tail_object.scale.x += speed;
            }
        } else if(player == "player_2") {
            if(player_orientation == 1) {
                player_2_tail_object.position.y = motorcycle_position_y - player_2_tail_object.scale.y / 2;
                player_2_tail_object.scale.y += speed;
            }
            else if(player_2_orientation == 2) {
                player_2_tail_object.position.x = motorcycle_position_x + player_2_tail_object.scale.x / 2;
                player_2_tail_object.scale.x -= speed;
            }
            else if(player_orientation == 3) {
                player_2_tail_object.position.y = motorcycle_position_y + player_2_tail_object.scale.y / 2;
                player_2_tail_object.scale.y += speed;
            }
            else if(player_2_orientation == 4) {
                player_2_tail_object.position.x = motorcycle_position_x + player_2_tail_object.scale.x / 2;
                player_2_tail_object.scale.x += speed;
            }
        }
    }

    tail_strings.push(
        buildTailStringPos(motorcycle_position_x, motorcycle_position_y, motorcycle_position_z)
    );
}

function continuosMovement(current_motorcycle, opponent_motorcycle, player, player_orientation, player_camera, player_color, tail_flag) {
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

    tail_flag = collisions(current_motorcycle, opponent_motorcycle, player_orientation, player, tail_flag);

    return drawTail(
        current_motorcycle.position.x,
        current_motorcycle.position.y,
        current_motorcycle.position.z,
        player,
        player_orientation,
        player_color,
        tail_flag
    );
}

function moveCameraToCurrentMotorcycle(player_camera, current_moto, player_orientation){
    player_camera.position.x = current_moto.position.x;
    player_camera.position.y = current_moto.position.y;

    if(player_orientation == 1) {
        player_camera.position.y = current_moto.position.y - camera_remoteness;
    } else if(player_orientation == 2) {
        player_camera.position.x = current_moto.position.x - camera_remoteness;
    } else if(player_orientation == 3) {
        player_camera.position.y = current_moto.position.y + camera_remoteness;
    } else if(player_orientation == 4) {
        player_camera.position.x = current_moto.position.x + camera_remoteness;
    }
}

function changeRotationWithPI(moto, player_camera, keychar) {
  if(keychar == 'd' || keychar == 'ArrowRight') {
    moto.rotation.y -= Math.PI / 2;
    player_camera.rotation.y -= Math.PI / 2;
  }
  else if(keychar == 'a' || keychar == 'ArrowLeft') {
    moto.rotation.y += Math.PI / 2;
    player_camera.rotation.y += Math.PI / 2;
  }
}

function initMotorcycle1(current_motorcycle, opponent_motorcycle) {
    //LINEA IMPORTANTE PARA OBTENER EVENTO DEL TECLADO, ESTA TIENE QUE ESTAR AL INICIO DE TODOS LOS DOCUMENTOS, ES UN LISTENER
    document.body.addEventListener('keydown', keyPressed);

    function keyPressed(keyboardEvent) {
        switch(keyboardEvent.key) {
            case 'ArrowRight':
                player_1_orientation++;
                player_1_tail_flag = 0;

                if(player_1_orientation > 4) {
                    player_1_orientation = 1;
                }
                moveCameraToCurrentMotorcycle(player_1_camera, current_motorcycle, player_1_orientation);
                changeRotationWithPI(current_motorcycle, player_1_camera, 'ArrowRight');
                break;
            case 'ArrowLeft':
                player_1_orientation--;
                player_1_tail_flag = 0;

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
                player_2_tail_flag = 0;

                if(player_2_orientation > 4) {
                    player_2_orientation = 1;
                }
                moveCameraToCurrentMotorcycle(player_2_camera, current_motorcycle, player_2_orientation);
                changeRotationWithPI(current_motorcycle, player_2_camera, 'd');
                break;
            case 'a':
                player_2_orientation--;
                player_2_tail_flag = 0;

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
