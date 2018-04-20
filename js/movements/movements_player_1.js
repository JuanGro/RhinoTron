function drawTail(motorcycle_position_x, motorcycle_position_y, motorcycle_position_z, orientation_player) {
    if (orientation_player == 1 || orientation_player == 3) geometry = new THREE.BoxGeometry(tail_width, tail_length, tail_height);
    if (orientation_player == 2 || orientation_player == 4) geometry = new THREE.BoxGeometry(tail_length, tail_width, tail_height);
    
    material = new THREE.MeshBasicMaterial({color: player_1_color});
    cube = new THREE.Mesh(geometry, material);

    cube.position.x = motorcycle_position_x;
    cube.position.y = motorcycle_position_y;
    cube.position.z = motorcycle_position_z;
    
    if (orientation_player == 1) cube.position.y -= tail_distance;
    if (orientation_player == 2) cube.position.x -= tail_distance;
    if (orientation_player == 3) cube.position.y += tail_distance;
    if (orientation_player == 4) cube.position.x += tail_distance;

    tail_objects.push(cube);
    scene.add(cube);

    tail_player_1.push(
        motorcycle_position_x.toFixed(decimals_to_check).toString().concat(
        "x",
        motorcycle_position_y.toFixed(decimals_to_check).toString(),
        "y",
        motorcycle_position_z.toFixed(decimals_to_check).toString(),
        "z"
    ));
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
             player_orientation);

    // render();
}

function initMotorcycle1(current_motorcycle, opponent_motorcycle) {
    //LINEA IMPORTANTE PARA OBTENER EVENTO DEL TECLADO, ESTA TIENE QUE ESTAR AL INICIO DE TODOS LOS DOCUMENTOS, ES UN LISTENER
    document.body.addEventListener('keydown', keyPressed);
        
    function keyPressed(keyboardEvent) {
        switch(keyboardEvent.key) {
            case 'ArrowUp':
                continuosMovement(current_motorcycle, opponent_motorcycle, 'player_1', player_1_orientation, player_1_camera);
                break;

            case 'ArrowRight':
                player_1_orientation++;

                if(player_1_orientation > 4) {
                    player_1_orientation = 1;
                }

                player_1_camera.position.x = current_motorcycle.position.x;
                player_1_camera.position.y = current_motorcycle.position.y;

                if(player_1_orientation == 1) {
                    player_1_camera.position.y = current_motorcycle.position.y - camera_remoteness;
                } else if(player_1_orientation == 2) {
                    player_1_camera.position.x = current_motorcycle.position.x - camera_remoteness;
                } else if(player_1_orientation == 3) {
                    player_1_camera.position.y = current_motorcycle.position.y + camera_remoteness;
                } else if(player_1_orientation == 4) {
                    player_1_camera.position.x = current_motorcycle.position.x + camera_remoteness;
                }
                
                current_motorcycle.rotation.y -= Math.PI / 2;
                player_1_camera.rotation.y -= Math.PI / 2;
                break;
            
            case 'ArrowLeft':
                player_1_orientation--;
                
                if(player_1_orientation < 1) {
                    player_1_orientation = 4;
                }

                player_1_camera.position.x = current_motorcycle.position.x;
                player_1_camera.position.y = current_motorcycle.position.y;

                if(player_1_orientation == 1) {
                    player_1_camera.position.y = current_motorcycle.position.y - camera_remoteness;
                } else if(player_1_orientation == 2) {
                    player_1_camera.position.x = current_motorcycle.position.x - camera_remoteness;
                } else if(player_1_orientation == 3) {
                    player_1_camera.position.y = current_motorcycle.position.y + camera_remoteness;
                } else if(player_1_orientation == 4) {
                    player_1_camera.position.x = current_motorcycle.position.x + camera_remoteness;
                }

                current_motorcycle.rotation.y += Math.PI / 2;
                player_1_camera.rotation.y += Math.PI / 2;
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
            case 'w':
                continuosMovement(current_motorcycle, opponent_motorcycle, 'player_2', player_2_orientation, player_2_camera);
                break;

            case 'd':
                player_2_orientation++;

                if(player_2_orientation > 4) {
                    player_2_orientation = 1;
                }

                player_2_camera.position.x = current_motorcycle.position.x;
                player_2_camera.position.y = current_motorcycle.position.y;

                if(player_2_orientation == 1) {
                    player_2_camera.position.y = current_motorcycle.position.y - camera_remoteness;
                } else if(player_2_orientation == 2) {
                    player_2_camera.position.x = current_motorcycle.position.x - camera_remoteness;
                } else if(player_2_orientation == 3) {
                    player_2_camera.position.y = current_motorcycle.position.y + camera_remoteness;
                } else if(player_2_orientation == 4) {
                    player_2_camera.position.x = current_motorcycle.position.x + camera_remoteness;
                }
                
                current_motorcycle.rotation.y -= Math.PI / 2;
                player_2_camera.rotation.y -= Math.PI / 2;
                break;
            
            case 'a':
                player_2_orientation--;
                
                if(player_2_orientation < 1) {
                    player_2_orientation = 4;
                }

                player_2_camera.position.x = current_motorcycle.position.x;
                player_2_camera.position.y = current_motorcycle.position.y;

                if(player_2_orientation == 1) {
                    player_2_camera.position.y = current_motorcycle.position.y - camera_remoteness;
                } else if(player_2_orientation == 2) {
                    player_2_camera.position.x = current_motorcycle.position.x - camera_remoteness;
                } else if(player_2_orientation == 3) {
                    player_2_camera.position.y = current_motorcycle.position.y + camera_remoteness;
                } else if(player_2_orientation == 4) {
                    player_2_camera.position.x = current_motorcycle.position.x + camera_remoteness;
                }

                current_motorcycle.rotation.y += Math.PI / 2;
                player_2_camera.rotation.y += Math.PI / 2;
                break;
        }

        keyboardEvent.preventDefault();
        render();
    }
}