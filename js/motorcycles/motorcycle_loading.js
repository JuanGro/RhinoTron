function buildMoto(moto_json_path, moto_name, scene, min_position, max_position) {
    // load a resource
    loader.load(
        // resource URL
        moto_json_path,
        // called when resource is loaded
        function(motorcycle) {
            // Add motorcycle in a random position between min_position and max_position
            motorcycle.position.x = getRandomArbitrary(min_position, max_position);
            motorcycle.position.y = getRandomArbitrary(min_position, max_position);
            motorcycle.position.z = 0;
            // Size of the motorcycle
            motorcycle.scale.set(15, 10, 10);
            // Rotation to place it
            motorcycle.rotation.x = Math.PI / 2;
            motorcycle.rotation.y = 0;
            motorcycle.rotation.z = 0;
            // Name for the motorcycle
            motorcycle.name = moto_name;
            // Add motorcycle to the environment
            scene.add(motorcycle);
        },
        // called when loading is in progresses
        function(xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        // called when loading has errors
        function(error) {
            console.log('An error happened');
        }
    );
}

function randomPosition(current_motorcycle, opponent_motorcycle, min_position, max_position, orientation) {
        current_motorcycle.position.x = getRandomArbitrary(min_position, max_position);
        current_motorcycle.position.y = getRandomArbitrary(min_position, max_position);
        current_motorcycle.position.z = 0;
        //current_motorcycle.rotation.y= Math.PI;

        opponent_motorcycle.position.x = -current_motorcycle.position.x;
        opponent_motorcycle.position.y = -current_motorcycle.position.y;
        opponent_motorcycle.position.z = 0;

        //POSITION MATCH CAMERA CADA VEZ QUE SE PIERDA
        player_1_camera.position.x = current_motorcycle.position.x;
        player_1_camera.position.y = current_motorcycle.position.y;

        if(orientation == 1) {
            player_1_camera.position.y = current_motorcycle.position.y - camera_remoteness;
        } else if(orientation == 2) {
            player_1_camera.position.x = current_motorcycle.position.x - camera_remoteness;
        } else if(orientation == 3) {
            player_1_camera.position.y = current_motorcycle.position.y + camera_remoteness;
        } else if(orientation == 4) {
            player_1_camera.position.x = current_motorcycle.position.x + camera_remoteness;
        }
        
        player_1_camera.position.z = camera_position_in_z;
        player_1_camera.rotation.x = Math.PI / 2;
}
