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
// camera.position.x = 0;
camera.position.y = 10;
camera.position.z = 5;

// add lighting to the environment
ambientLigth = new THREE.AmbientLight(0x207c99, 4);
scene.add(ambientLigth);

// Draw scene
var render = function(){
  renderer.render(scene, camera);
};

var Loop = function(){
  requestAnimationFrame(Loop);
  render();
};

Loop();
