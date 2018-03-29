/**
 * Function to build a single wall given the dimensions for it and the position to place it
 */
function buildWall(x_position, y_position, z_position, width_wall, height_wall, depth_wall, wall_texture_path) {
    var geometry = new THREE.BoxGeometry(width_wall, height_wall, depth_wall);
    var material = new THREE.MeshLambertMaterial({
      map: new THREE.TextureLoader().load(wall_texture_path, function ( texture ) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set( 0, 0 );
        texture.repeat.set( 10, 10 ); // repeat image ten times to cover the 1000px
      })
    });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = x_position;
    mesh.position.y = y_position;
    mesh.position.z = z_position;
    scene.add(mesh);
}

/**
 * Function to build the floor with a texture given the size for the plane
 */
function buildFloor(environment_size, floor_texture_path) {
    var geometry = new THREE.BoxGeometry(environment_size, 1, environment_size); // plane of 1000px in x and y
    var material = new THREE.MeshLambertMaterial({
      map: new THREE.TextureLoader().load(floor_texture_path, function ( texture ) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set( 0, 0 );
        texture.repeat.set( 10, 10 ); // repeat image ten times to cover the 1000px
      })
    });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 0;
    scene.add(mesh);
}

/**
 * Function to build all the limits given the size of the plane
 */
function buildLimits(environment_size, wall_texture_path) {
    y_position = 0;
    z_position = environment_size / 2;
    x_position = environment_size / 2;
    height = environment_size / 2
    // Left
    buildWall(-x_position, y_position, 0, 1, height, environment_size, wall_texture_path);
    // Right
    buildWall(x_position, y_position, 0, 1, height, environment_size, wall_texture_path);
    // Front
    buildWall(0, y_position, z_position, environment_size, height, 1, wall_texture_path);
    // Back
    buildWall(0, y_position, -z_position, environment_size, height, 1, wall_texture_path);
}

/*------------- Configuring the environment ----------------------- */
var wall_texture_path = '../img/wall.png';
var floor_texture_path = '../img/floor.png';

// Build environment
buildLimits(environment_size, wall_texture_path);
buildFloor(environment_size, floor_texture_path);
