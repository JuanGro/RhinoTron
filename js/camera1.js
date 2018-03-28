var camera1 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

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
  camera1.aspect = width/height;
  camera1.updateProjectionMatrix();
});

// create a orbit control over the geometry
var controls = new THREE.OrbitControls(camera1, renderer.domElement);

// inital position of camera1 to can resize window
// camera1.position.x = 0;
camera1.position.y = 10;
camera1.position.z = 5;

// add lighting to the environment
var ambientLigth = new THREE.AmbientLight(0x207c99, 4);
scene.add(ambientLigth);

// Draw scene
var render = function(){
    renderer.render(scene, camera1);
};
  
var Loop = function(){
    requestAnimationFrame(Loop);
    render();
};

Loop();