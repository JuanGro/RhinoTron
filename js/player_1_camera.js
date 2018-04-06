var player_1_camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);

// display crafted scenes using WebGL
var renderer_2 = new THREE.WebGLRenderer();
renderer_2.setSize(window.innerWidth / 5, window.innerHeight / 5);
var container_2 = document.getElementById('player_1_camera');
document.body.appendChild(container_2);
container_2.appendChild(renderer_2.domElement);

// detect when window resize
window.addEventListener('resize', function() {
  renderer_2.setSize(window.innerWidth / 5, window.innerHeight / 5);
  player_1_camera.aspect = window.innerWidth / window.innerHeight;
  player_1_camera.updateProjectionMatrix();
});

// inital position of player_1_camera to can resize window
player_1_camera.position.x = 0;
player_1_camera.position.y = 0;
player_1_camera.position.z = environment_size / 2;

// create a orbit control over the geometry
// var controls = new THREE.OrbitControls(player_1_camera, renderer_2.domElement);