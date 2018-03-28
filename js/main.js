// Add FPS monitor
(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(script);})()

// variables definition
var scene, camera, renderer, controls, ambienteLigth;

// Creating scene and cameras
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// display crafted scenes using WebGL
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// detect when window resize
window.addEventListener( 'resize', function(){
  var width = window.innerWidth;
  var height = window.innerHeight;

  // resize window
  renderer.setSize(width, height);
  camera.aspect = width/height;
  camera.updateProjectionMatrix();
});

// create a orbit control over the geometry
controls = new THREE.OrbitControls(camera, renderer.domElement);

// inital position of camera to can resize window
camera.position.z = 5;
camera.position.y = 10;

// add lighting to the environment
ambienteLigth = new THREE.AmbientLight(0x207c99, 4);
scene.add(ambienteLigth);

/*------------- Configuring the environment ----------------------- */
function buildWall(x_position, y_position, z_position, width_wall, height_wall, depth_wall, wall_texture_path) {
  var geometry = new THREE.BoxGeometry(width_wall, height_wall, depth_wall);
  var material = new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load(wall_texture_path),
    side: THREE.doubleSide
  });
  var mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = x_position;
  mesh.position.y = y_position;
  mesh.position.z = z_position;
  scene.add(mesh);
}

function buildFloor(environment_size, floor_texture_path) {
  var geometry = new THREE.BoxGeometry(environment_size, 1, environment_size); // plane of 1000px in x and y
  var material = new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load(floor_texture_path ,function ( texture ) {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.offset.set( 0, 0 );
      texture.repeat.set( 10, 10 ); // repeat image ten times to cover the 1000px
    }),
    side: THREE.doubleSide
  });
  var mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
}

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

environment_size = 500;
wall_texture_path = 'img/wall.jpg';
floor_texture_path = 'img/floor.png';
buildLimits(environment_size, wall_texture_path);
buildFloor(environment_size, floor_texture_path);

// Draw scene
var render = function(){
  renderer.render(scene, camera);
};

var Loop = function(){
  requestAnimationFrame(Loop);
  render();
};

Loop();
