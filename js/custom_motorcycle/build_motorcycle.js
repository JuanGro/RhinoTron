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

            if (motorcycle_number == 1) {
                motorcycle_1 = scene.getObjectByName("motorcycle_1");
                motorcycle_list.push(motorcycle_1);
                motorcycle_1.position.x -= 40;
            } else {
                motorcycle_2 = scene.getObjectByName("motorcycle_2");
                motorcycle_list.push(motorcycle_2);
                motorcycle_2.position.x += 40;
            }
        }
    );
}