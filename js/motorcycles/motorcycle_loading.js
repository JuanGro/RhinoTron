function buildMoto(moto_json_path, moto_name, scene, min_position, max_position) {
    // load a resource
    loader.load(
        // resource URL
        moto_json_path,
        // called when resource is loaded
        function(moto) {
            // Add motorcycle in a random position between min_position and max_position
            moto.position.x = getRandomArbitrary(min_position, max_position);
            moto.position.y = getRandomArbitrary(min_position, max_position);
            moto.position.z = 0;
            // Size of the moto
            moto.scale.set(15, 10, 10);
            // Rotation to place it
            moto.rotation.x = Math.PI / 2;
            moto.rotation.y = 0;
            moto.rotation.z = 0;
            // Name for the moto
            moto.name = moto_name;
            // Add moto to the environment
            scene.add(moto);
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
