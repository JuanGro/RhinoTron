var main_camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);

// display crafted scenes using WebGL
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
var container = document.getElementById('main_camera');
document.body.appendChild(container);
container.appendChild(renderer.domElement);

// detect when window resize
window.addEventListener('resize', function() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  main_camera.aspect = window.innerWidth / window.innerHeight;
  main_camera.updateProjectionMatrix();
});

// inital position of main_camera to can resize window
main_camera.position.x = 0;
main_camera.position.y = 0;
main_camera.position.z = environment_size / 2;

// create a orbit control over the geometry
// var controls = new THREE.OrbitControls(main_camera, renderer.domElement);