function buildMoto(
    motorcycle_json_path,
    motorcycle_name,
    scene,
    motorcycle_loader,
    motorcycle_number,
    environment_size,
    player_camera,
    player_orientation
) {
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

            if (motorcycle_number == 1) {
                motorcycle_1 = scene.getObjectByName(motorcycle_name);
                randomPosition(motorcycle_1, 0, environment_size / 4);
                setCamerasPosition(player_camera, motorcycle_1);
                initMotorcycle1(motorcycle_1);
            } else {
                motorcycle_2 = scene.getObjectByName(motorcycle_name);
                randomPosition(motorcycle_2, -environment_size / 4, 0);
                setCamerasPosition(player_camera, motorcycle_2);
            }
        }
    );
}