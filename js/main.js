// Add FPS monitor
// (function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(script);})()

// Creating scene and cameras
var scene = new THREE.Scene();

// add lighting to the environment
var ambient_light = new THREE.AmbientLight(0x207c99, 4);
scene.add(ambient_light);

// Play the default song or load the selected one
playSelectedSong();

// Mode game saved to localstorage, the method is in the animate files
saveModeGame();

// Plane size
var environment_size = 400;

// Location of the 3D models
var motorcycle_1_json_path = '../models/classic-1982-tron-light-cycle-red.json';
var motorcycle_2_json_path = '../models/classic-1982-tron-light-cycle-green.json';
if (getFromLocalStorage('motorcycle_1_json_path')) motorcycle_1_json_path = getFromLocalStorage('motorcycle_1_json_path');
if (getFromLocalStorage('motorcycle_2_json_path')) motorcycle_2_json_path = getFromLocalStorage('motorcycle_2_json_path');

// Color for the tails
var player_1_color_hex = 0xff0000;
var player_2_color_hex = 0x7CFC00;
if (getFromLocalStorage('player_1_color_hex')) player_1_color_hex = Number(getFromLocalStorage('player_1_color_hex'));
if (getFromLocalStorage('player_2_color_hex')) player_2_color_hex = Number(getFromLocalStorage('player_2_color_hex'));

var player_1_color_rgb = 'rgb(255, 0, 0)';
var player_2_color_rgb = 'rgb(49, 233, 12)';
if (getFromLocalStorage('player_1_color_rgb')) player_1_color_rgb = getFromLocalStorage('player_1_color_rgb');
if (getFromLocalStorage('player_2_color_rgb')) player_2_color_rgb = getFromLocalStorage('player_2_color_rgb');

// Configuring the environment
buildFloor(environment_size, floor_texture_path = './../img/floor.png');
buildLimits(environment_size, wall_texture_path = './../img/wall.png');

// Blinker
blinker();

// Cameras
var main_camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
var player_1_camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
var player_2_camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);

// Display crafted scenes using WebGL
var renderer_main_camera = new THREE.WebGLRenderer();
var renderer_player_1_camera = new THREE.WebGLRenderer();
var renderer_player_2_camera = new THREE.WebGLRenderer();

startMainCamera(renderer_main_camera, main_camera, environment_size, 'main_camera');
startPlayerCamera(renderer_player_1_camera, player_1_camera, player_1_color_rgb, 'player_1_camera');
startPlayerCamera(renderer_player_2_camera, player_2_camera, player_2_color_rgb, 'player_2_camera');

// instantiate a loader
var motorcycle_1_loader = new THREE.ObjectLoader();
var motorcycle_2_loader = new THREE.ObjectLoader();

// Speed of the motorcycles
var speed = 2;

// Objects to save the 3D motorcycles
var motorcycle_1;
var motorcycle_2;

// Global variables to know where the motorcycles are going
var player_1_orientation = 1;
var player_2_orientation = 1;

// Distance to follow the motorcycles
var camera_remoteness = 20;

// Distance to set the camera that is following the motorcycle
var camera_position_in_z = 25;

// Size of the tail
var tail_distance = 0; // DO NOT CHANGE!
var tail_width = 1; // DO NOT CHANGE!
var tail_length = 1; // DO NOT CHANGE!
var tail_height = 20;

// Global variables to know if the tail has to be drawn or just updated
var player_1_tail_flag = 0;
var player_2_tail_flag = 0;

// Global variable to know which is the current tail object to update its size
var player_1_tail_object = [];
var player_2_tail_object = [];

// List with the tails as Mesh objects
var tail_objects = [];

// List to know if there is a collision (it saves the positions as an string)
var tail_strings = [];

// Lifes
var player_1_lifes = 3;
var player_2_lifes = 3;

var player_1_scoreboard = document.getElementById("player_1_scoreboard");
var player_2_scoreboard = document.getElementById("player_2_scoreboard");

player_1_scoreboard.innerHTML = player_1_lifes;
player_2_scoreboard.innerHTML = player_2_lifes;
player_1_scoreboard.style.borderColor = player_1_color_rgb;
player_2_scoreboard.style.borderColor = player_2_color_rgb;

player_1_scoreboard.style.visibility = "visible";
player_2_scoreboard.style.visibility = "visible";

// Build motos
buildMoto(motorcycle_1_json_path, "motorcycle_1", scene, motorcycle_1_loader, 1, environment_size, player_1_camera, player_1_orientation);
buildMoto(motorcycle_2_json_path, "motorcycle_2", scene, motorcycle_2_loader, 2, environment_size, player_2_camera, player_2_orientation);

// Draw scene
function render() {
    renderer_main_camera.render(scene, main_camera);
    renderer_player_1_camera.render(scene, player_1_camera);
    renderer_player_2_camera.render(scene, player_2_camera);
}

animate();