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

// Color for the tails
var player_1_color_hex = 0xff0000;
var player_2_color_hex = 0x7CFC00;
var player_1_color_rgb = 'rgb(255, 0, 0)';
var player_2_color_rgb = 'rgb(49, 233, 12)';

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

// Distance to follow the motorcycles
var camera_remoteness = 20;

// Distance to set the camera that is following the motorcycle
var camera_position_in_z = 25;

// Build motos
buildMoto(motorcycle_1_json_path, "motorcycle_1", scene, motorcycle_1_loader, 1, environment_size, camera_customization, player_1_orientation);
buildMoto(motorcycle_2_json_path, "motorcycle_2", scene, motorcycle_2_loader, 2, environment_size, camera_customization, player_2_orientation);

// Draw scene
function render() {
    renderer_player_customization.render(scene, camera_customization);
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

animate();