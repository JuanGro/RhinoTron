window.onload = function() {
    var motorcycle_1 = scene.getObjectByName("motorcycle_1");
    var motorcycle_2 = scene.getObjectByName("motorcycle_2");
    init(motorcycle_1, motorcycle_2);
}

function init(motorcycle_1, motorcycle_2){
    //LINEA IMPORTANTE PARA OBTENER EVENTO DEL TECLADO , ESTA TIENE QUE ESTAR AL INICIO DE TODOS LOS DOCUMENTOS, ES UN LISTENER
    document.body.addEventListener('keydown', keyPressed);
        player_1_camera.position.x = motorcycle_1.position.x;
        player_1_camera.position.y = motorcycle_1.position.y - camera_remoteness;
        player_1_camera.position.z = 25;
        player_1_camera.rotation.x = Math.PI / 2;
        
    function keyPressed(keyboardEvent) {
        switch(keyboardEvent.key) {
            
            case 'ArrowUp':
                if(orientation == 1) {
                    motorcycle_1.position.y += speed;
                    player_1_camera.position.y = motorcycle_1.position.y - camera_remoteness;
                } else if(orientation == 2) {
                    motorcycle_1.position.x += speed;
                    player_1_camera.position.x = motorcycle_1.position.x - camera_remoteness;
                } else if(orientation == 3) {
                    motorcycle_1.position. y -= speed;
                    player_1_camera.position.y = motorcycle_1.position.y + camera_remoteness;
                } else if(orientation == 4) {
                    motorcycle_1.position.x -= speed;
                    player_1_camera.position.x = motorcycle_1.position.x + camera_remoteness;
                }

                if (orientation == 1 || orientation == 3) var geometry = new THREE.BoxGeometry(5, 10, 20);
                if (orientation == 2 || orientation == 4) var geometry = new THREE.BoxGeometry(10, 5, 20);
                var material = new THREE.MeshBasicMaterial({color: player_1_color});
                var cube = new THREE.Mesh(geometry, material);
                
                cube.position.x = motorcycle_1.position.x;
                cube.position.y = motorcycle_1.position.y;
                cube.position.z = motorcycle_1.position.z;
                
                if (orientation == 1) cube.position.y -= camera_remoteness;
                if (orientation == 2) cube.position.x -= camera_remoteness;
                if (orientation == 3) cube.position.y += camera_remoteness;
                if (orientation == 4) cube.position.x += camera_remoteness;
                
                scene.add(cube);
                break;

            case 'ArrowRight':
                orientation++;

                if(orientation > 4) {
                    orientation = 1;
                }

                player_1_camera.position.x= motorcycle_1.position.x;
                player_1_camera.position.y = motorcycle_1.position.y;

                if(orientation == 1) {
                    player_1_camera.position.y = motorcycle_1.position.y - camera_remoteness;
                } else if(orientation == 2) {
                    player_1_camera.position.x = motorcycle_1.position.x - camera_remoteness;
                } else if(orientation == 3) {
                    player_1_camera.position.y = motorcycle_1.position.y + camera_remoteness;
                } else if(orientation == 4) {
                    player_1_camera.position.x = motorcycle_1.position.x + camera_remoteness;
                }
                
                motorcycle_1.rotation.y -= Math.PI / 2;
                player_1_camera.rotation.y -= Math.PI / 2;
                break;
            
            case 'ArrowLeft':
                orientation--;
                
                if(orientation < 1) {
                    orientation = 4;
                }

                player_1_camera.position.x = motorcycle_1.position.x;
                player_1_camera.position.y = motorcycle_1.position.y;

                if(orientation == 1) {
                    player_1_camera.position.y = motorcycle_1.position.y - camera_remoteness;
                } else if(orientation == 2) {
                    player_1_camera.position.x = motorcycle_1.position.x - camera_remoteness;
                } else if(orientation == 3) {
                    player_1_camera.position.y = motorcycle_1.position.y + camera_remoteness;
                } else if(orientation == 4) {
                    player_1_camera.position.x = motorcycle_1.position.x + camera_remoteness;
                }

                motorcycle_1.rotation.y += Math.PI / 2;
                player_1_camera.rotation.y += Math.PI / 2;
                break;
        }

        keyboardEvent.preventDefault();
        collision_wall(motorcycle_1, motorcycle_2,orientation);
        render();
    }
}

