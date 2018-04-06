var player_2_camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);

// display crafted scenes using WebGL
var renderer_3 = new THREE.WebGLRenderer();
renderer_3.setSize(window.innerWidth / 5, window.innerHeight / 5);
var container_3 = document.getElementById('player_2_camera');
document.body.appendChild(container_3);
container_3.appendChild(renderer_3.domElement);

// detect when window resize
window.addEventListener('resize', function() {
  renderer_3.setSize(window.innerWidth / 5, window.innerHeight / 5);
  player_2_camera.aspect = window.innerWidth / window.innerHeight;
  player_2_camera.updateProjectionMatrix();
});

// inital position of player_2_camera to can resize window
player_2_camera.position.x = 0;
player_2_camera.position.y = 0;
player_2_camera.position.z = environment_size / 2;

// create a orbit control over the geometry
// var controls = new THREE.OrbitControls(player_2_camera, renderer_3.domElement);