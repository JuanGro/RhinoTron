/**
 * Function to build a single wall given the dimensions for it and the position to place it
 */
function buildWall(
  x_position,
  y_position,
  z_position,
  width_wall,
  height_wall,
  depth_wall,
  wall_texture_path
) {
    mesh = new THREE.Mesh(
      // Geometry
      new THREE.BoxGeometry(width_wall, height_wall, depth_wall),
      // Material
      new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load(wall_texture_path, function (texture) {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          texture.offset.set(0, 0);
          texture.repeat.set(10, 10); // repeat image ten times to cover the 1000px
        })
      })
    );
    mesh.position.x = x_position;
    mesh.position.y = y_position;
    mesh.position.z = z_position;
    scene.add(mesh);
}

/**
 * Function to build all the limits given the size of the plane
 */
function buildLimits(environment_size, wall_texture_path) {
    // Left
    buildWall(
      x_position = -environment_size / 2,
      y_position = 0,
      z_position = environment_size / 4,
      width_wall = 1,
      height_wall = environment_size,
      depth_wall = environment_size / 2,
      wall_texture_path
    );
    // Right
    buildWall(
      x_position = environment_size / 2,
      y_position = 0,
      z_position = environment_size / 4,
      width_wall = 1,
      height_wall = environment_size,
      depth_wall = environment_size / 2,
      wall_texture_path
    );
    // Front
    buildWall(
      x_position = 0,
      y_position = environment_size / 2,
      z_position = environment_size / 4,
      width_wall = environment_size,
      height_wall = 1,
      depth_wall = environment_size / 2,
      wall_texture_path
    );
    // Back
    buildWall(
      x_position = 0,
      y_position = -environment_size / 2,
      z_position = environment_size / 4,
      width_wall = environment_size,
      height_wall = 1,
      depth_wall = environment_size / 2,
      wall_texture_path
    );
}