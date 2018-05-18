function loadMotorcycles(motorcycle_1_json_path, motorcycle_2_json_path, motorcycle_1_name, motorcycle_2_name, scene) {
    buildMoto(motorcycle_1_json_path, motorcycle_1_name, scene, motorcycle_1_loader, 1); // Set in a positive location
    buildMoto(motorcycle_2_json_path, motorcycle_2_name, scene, motorcycle_2_loader, 2); // Set in a negative location
}

function buildMoto(motorcycle_json_path, motorcycle_name, scene, motorcycle_loader, motorcycle_number) {
    // load a resource
    motorcycle_loader.load(
        // resource URL
        motorcycle_json_path,
        // called when resource is loaded
        function(motorcycle) {
            // Size of the motorcycle
            motorcycle.scale.set(15, 10, 10);
            // Rotation to place it
            motorcycle.rotation.x = Math.PI / 2;
            // Name for the motorcycle
            motorcycle.name = motorcycle_name;
            // Add motorcycle to the environment
            scene.add(motorcycle);

            if (motorcycle_number == 2) {
                motorcycle_1 = scene.getObjectByName("motorcycle_1");
                motorcycle_2 = scene.getObjectByName("motorcycle_2");
                randomPosition(motorcycle_1, motorcycle_2, 0, environment_size / 4, player_1_orientation);
                setCamerasPosition(player_1_camera, motorcycle_1, player_1_orientation);
                setCamerasPosition(player_2_camera, motorcycle_2, player_1_orientation);
                initMotorcycle1(motorcycle_1);
            }
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

loadMotorcycles(motorcycle_1_json_path, motorcycle_2_json_path, "motorcycle_1", "motorcycle_2", scene);