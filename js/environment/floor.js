/**
 * Function to build the floor with a texture given the size for the plane
 */
function buildFloor(environment_size, floor_texture_path) {
    mesh = new THREE.Mesh(
      // Geometry
      new THREE.BoxGeometry(
        environment_size,
        environment_size,
        1
      ),
      // Material
      new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load(
          floor_texture_path,
          function(texture) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.offset.set(0, 0);
            texture.repeat.set(10, 10);
          }
        )
      })
    );
    scene.add(mesh);
}