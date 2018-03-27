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
// FLOOR
var floor = new THREE.CubeGeometry(1000,1,1000); // plane of 1000px in x and y
var floorMaterial = new THREE.MeshLambertMaterial({
  map: new THREE.TextureLoader().load('img/floor.png',function ( texture ) {

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 10, 10 ); // repeat image ten times to cover the 1000px
  }),
  side: THREE.doubleSide
});
var floorEnvironment = new THREE.Mesh(floor, floorMaterial);
scene.add(floorEnvironment);

// LEFT
var left = new THREE.CubeGeometry(1,300,1000);
var leftMaterial = new THREE.MeshLambertMaterial({
  map: new THREE.TextureLoader().load('img/wall.jpg'),
  side: THREE.doubleSide
});
var leftWall = new THREE.Mesh(left, leftMaterial);
leftWall.position.x = -500;
leftWall.position.y = 150;
scene.add(leftWall);

// RIGHT
var right = new THREE.CubeGeometry(1,300,1000);
var rightMaterial = new THREE.MeshLambertMaterial({
  map: new THREE.TextureLoader().load('img/wall.jpg'),
  side: THREE.doubleSide
});
var rightWall = new THREE.Mesh(right, rightMaterial);
rightWall.position.x = 500;
rightWall.position.y = 150;
scene.add(rightWall);


// FRONT
var front = new THREE.CubeGeometry(1000,300,1);
var frontMaterial = new THREE.MeshLambertMaterial({
  map: new THREE.TextureLoader().load('img/wall.jpg'),
  side: THREE.doubleSide
});
var frontWall = new THREE.Mesh(front, frontMaterial);
frontWall.position.z = 500;
frontWall.position.y = 150;
scene.add(frontWall);

// BACK
var backGeometry = new THREE.CubeGeometry(1000,300,1);
var backMaterial = new THREE.MeshLambertMaterial({
  map: new THREE.TextureLoader().load('img/wall.jpg'),
  side: THREE.doubleSide
});
var backWall = new THREE.Mesh(backGeometry, backMaterial);
backWall.position.z = -500;
backWall.position.y = 150;
scene.add(backWall);


var update = function(){

};

// Draw scene
var render = function(){
  renderer.render(scene, camera);
};

var Loop = function(){
  requestAnimationFrame(Loop);

  update();
  render();
};

Loop();
