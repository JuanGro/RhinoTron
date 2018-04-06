// Add FPS monitor
(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(script);})()

// Creating scene and cameras
var scene = new THREE.Scene();

// add lighting to the environment
var ambient_light = new THREE.AmbientLight(0x207c99, 4);
scene.add(ambient_light);

// Plane size
var environment_size = 300;

var main_camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
var player_1_camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
var player_2_camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);

// display crafted scenes using WebGL
var renderer_main_camera = new THREE.WebGLRenderer();
var renderer_player_1_camera = new THREE.WebGLRenderer();
var renderer_player_2_camera = new THREE.WebGLRenderer();

// Draw scene
function render() {
    renderer_main_camera.render(scene, main_camera);
    renderer_player_1_camera.render(scene, player_1_camera);
    renderer_player_2_camera.render(scene, player_2_camera);
}
  
var animate = function(){
    requestAnimationFrame(animate);
    render();
};

animate();