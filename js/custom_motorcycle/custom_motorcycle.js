// Creating scene and cameras
var scene = new THREE.Scene();

// add lighting to the environment
var ambient_light = new THREE.AmbientLight(0x207c99, 4);
scene.add(ambient_light);

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
if (getFromLocalStorage('player_1_color_hex')) player_1_color_hex = getFromLocalStorage('player_1_color_hex');
if (getFromLocalStorage('player_2_color_hex')) player_2_color_hex = getFromLocalStorage('player_2_color_hex');

var player_1_color_rgb = 'rgb(255, 0, 0)';
var player_2_color_rgb = 'rgb(49, 233, 12)';
if (getFromLocalStorage('player_1_color_rgb')) player_1_color_rgb = getFromLocalStorage('player_1_color_rgb');
if (getFromLocalStorage('player_2_color_rgb')) player_2_color_rgb = getFromLocalStorage('player_2_color_rgb');

// Configuring the environment
buildFloor(environment_size, floor_texture_path = './../img/floor.png');
buildLimits(environment_size, wall_texture_path = './../img/wall.png');

var camera_customization = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer_player_customization = new THREE.WebGLRenderer();

startCamera(renderer_player_customization, camera_customization, 'camera_customization');

// instantiate a loader
var motorcycle_1_loader = new THREE.ObjectLoader();
var motorcycle_2_loader = new THREE.ObjectLoader();

// Objects to save the 3D motorcycles
var motorcycle_1;
var motorcycle_2;

// Global variables to know where the motorcycles are going
var player_1_orientation = 1;
var player_2_orientation = 1;

var motorcycle_list = [];

// Build motos
buildMoto(motorcycle_1_json_path, "motorcycle_1", scene, motorcycle_1_loader, 1);
buildMoto(motorcycle_2_json_path, "motorcycle_2", scene, motorcycle_2_loader, 2);

// Draw scene
function render() {
    renderer_player_customization.render(scene, camera_customization);
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

animate();