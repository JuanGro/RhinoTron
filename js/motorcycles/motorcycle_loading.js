function loadMotorcycles(motorcycle_1_json_path, motorcycle_2_json_path, motorcycle_1_name, motorcycle_2_name, scene) {
    buildMoto(motorcycle_1_json_path, motorcycle_1_name, scene); // Set in a positive location
    buildMoto(motorcycle_2_json_path, motorcycle_2_name, scene); // Set in a negative location
}

function buildMoto(motorcycle_json_path, motorcycle_name, scene) {
    // load a resource
    loader.load(
        // resource URL
        motorcycle_json_path,
        // called when resource is loaded
        function(motorcycle) {
            // Size of the motorcycle
            motorcycle.scale.set(15, 10, 10);
            // Rotation to place it
            motorcycle.rotation.x = Math.PI / 2;
            motorcycle.rotation.y = 0;
            motorcycle.rotation.z = 0;
            // Name for the motorcycle
            motorcycle.name = motorcycle_name;
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

function setCamerasPosition(player_camera, motorcycle, orientation) {
    player_camera.position.x = motorcycle.position.x;
    player_camera.position.y = motorcycle.position.y;
    player_camera.position.z = camera_position_in_z;

    player_camera.rotation.x = Math.PI / 2;
}

function randomPosition(current_motorcycle, opponent_motorcycle, min_position, max_position, orientation) {
    current_motorcycle.position.x = getRandomArbitrary(min_position, max_position);
    current_motorcycle.position.y = getRandomArbitrary(min_position, max_position);
    current_motorcycle.position.z = 0;
    //current_motorcycle.rotation.y= Math.PI;

    opponent_motorcycle.position.x = -current_motorcycle.position.x;
    opponent_motorcycle.position.y = -current_motorcycle.position.y;
    opponent_motorcycle.position.z = 0;

    setCamerasPosition(player_1_camera, current_motorcycle, orientation);
    setCamerasPosition(player_2_camera, opponent_motorcycle, orientation);
}

loadMotorcycles(motorcycle_1_json_path, motorcycle_2_json_path, "motorcycle_1", "motorcycle_2", scene); // Set in a positive location