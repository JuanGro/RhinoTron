function buildMoto(motoJsonPath, motoName, scene, minPosition, maxPosition) {
    // load a resource
    loader.load(
        // resource URL
        motoJsonPath,
        // called when resource is loaded
        function(moto) {
            // Add motorcycle in a random position between minPosition and maxPosition
            // moto.position.x = Math.floor(Math.random() * (201 - (-201))) + (-201);
            // moto.position.y = Math.floor(Math.random() * (201 - (-201))) + (-201);
            // moto.position.z = 0;
            // Size of the moto
            moto.scale.set(15, 10, 10);
            // Rotation to place it
            moto.rotation.x = Math.PI / 2;
            moto.rotation.y = 0;
            moto.rotation.z = 0;
            // Name for the moto
            moto.name = motoName;
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
