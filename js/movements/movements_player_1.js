function drawTail(motorcycle_position_x, motorcycle_position_y, motorcycle_position_z, player_1_orientation) {
    if (player_1_orientation == 1 || player_1_orientation == 3) geometry = new THREE.BoxGeometry(tail_width, tail_length, tail_height);
    if (player_1_orientation == 2 || player_1_orientation == 4) geometry = new THREE.BoxGeometry(tail_length, tail_width, tail_height);
    
    material = new THREE.MeshBasicMaterial({color: player_1_color});
    cube = new THREE.Mesh(geometry, material);

    cube.position.x = motorcycle_position_x;
    cube.position.y = motorcycle_position_y;
    cube.position.z = motorcycle_position_z;
    
    if (player_1_orientation == 1) cube.position.y -= tail_distance;
    if (player_1_orientation == 2) cube.position.x -= tail_distance;
    if (player_1_orientation == 3) cube.position.y += tail_distance;
    if (player_1_orientation == 4) cube.position.x += tail_distance;

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

function continuosMovement(motorcycle_1, motorcycle_2) {
    player_1_camera.position.x = motorcycle_1.position.x;
    player_1_camera.position.y = motorcycle_1.position.y - camera_remoteness;
    player_1_camera.position.z = camera_position_in_z;
    player_1_camera.rotation.x = Math.PI / 2;

    if(player_1_orientation == 1) {
        motorcycle_1.position.y += speed;
        player_1_camera.position.y = motorcycle_1.position.y - camera_remoteness;
    } else if(player_1_orientation == 2) {
        motorcycle_1.position.x += speed;
        player_1_camera.position.x = motorcycle_1.position.x - camera_remoteness;
    } else if(player_1_orientation == 3) {
        motorcycle_1.position. y -= speed;
        player_1_camera.position.y = motorcycle_1.position.y + camera_remoteness;
    } else if(player_1_orientation == 4) {
        motorcycle_1.position.x -= speed;
        player_1_camera.position.x = motorcycle_1.position.x + camera_remoteness;
    }

    collisions(motorcycle_1, motorcycle_2, player_1_orientation, 'player_1');

    drawTail(motorcycle_1.position.x,
                motorcycle_1.position.y,
                motorcycle_1.position.z,
                player_1_orientation);

    // render();
}

function initMotorcycle1(motorcycle_1, motorcycle_2) {
    //LINEA IMPORTANTE PARA OBTENER EVENTO DEL TECLADO , ESTA TIENE QUE ESTAR AL INICIO DE TODOS LOS DOCUMENTOS, ES UN LISTENER
    document.body.addEventListener('keydown', keyPressed);
        
    function keyPressed(keyboardEvent) {
        switch(keyboardEvent.key) {
            case 'ArrowUp':
                continuosMovement(motorcycle_1, motorcycle_2);
                break;

            case 'ArrowRight':
                player_1_orientation++;

                if(player_1_orientation > 4) {
                    player_1_orientation = 1;
                }

                player_1_camera.position.x= motorcycle_1.position.x;
                player_1_camera.position.y = motorcycle_1.position.y;

                if(player_1_orientation == 1) {
                    player_1_camera.position.y = motorcycle_1.position.y - camera_remoteness;
                } else if(player_1_orientation == 2) {
                    player_1_camera.position.x = motorcycle_1.position.x - camera_remoteness;
                } else if(player_1_orientation == 3) {
                    player_1_camera.position.y = motorcycle_1.position.y + camera_remoteness;
                } else if(player_1_orientation == 4) {
                    player_1_camera.position.x = motorcycle_1.position.x + camera_remoteness;
                }
                
                motorcycle_1.rotation.y -= Math.PI / 2;
                player_1_camera.rotation.y -= Math.PI / 2;
                break;
            
            case 'ArrowLeft':
                player_1_orientation--;
                
                if(player_1_orientation < 1) {
                    player_1_orientation = 4;
                }

                player_1_camera.position.x = motorcycle_1.position.x;
                player_1_camera.position.y = motorcycle_1.position.y;

                if(player_1_orientation == 1) {
                    player_1_camera.position.y = motorcycle_1.position.y - camera_remoteness;
                } else if(player_1_orientation == 2) {
                    player_1_camera.position.x = motorcycle_1.position.x - camera_remoteness;
                } else if(player_1_orientation == 3) {
                    player_1_camera.position.y = motorcycle_1.position.y + camera_remoteness;
                } else if(player_1_orientation == 4) {
                    player_1_camera.position.x = motorcycle_1.position.x + camera_remoteness;
                }

                motorcycle_1.rotation.y += Math.PI / 2;
                player_1_camera.rotation.y += Math.PI / 2;
                break;
        }

        keyboardEvent.preventDefault();
        render();
    }
}