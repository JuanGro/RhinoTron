// Add FPS monitor
(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(script);})()

// Creating scene and cameras
var scene = new THREE.Scene();

// add lighting to the environment
var ambient_light = new THREE.AmbientLight(0x207c99, 4);
scene.add(ambient_light);

// Plane size
var environment_size = 400;

var main_camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
var player_1_camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
var player_2_camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);

//c1helper = new THREE.CameraHelper( player_1_camera );
//	scene.add( c1helper );

// display crafted scenes using WebGL
var renderer_main_camera = new THREE.WebGLRenderer();
var renderer_player_1_camera = new THREE.WebGLRenderer();
var renderer_player_2_camera = new THREE.WebGLRenderer();

// instantiate a loader
var loader = new THREE.ObjectLoader();

var speed = 2;
var decimals_to_check = 0;

var motorcycle_1;
var motorcycle_2;

var player_1_orientation = 1;
var player_2_orientation = 1;

var camera_remoteness = 20;
var camera_position_in_z = 25;

var tail_distance = 7.5;
var tail_width = 5;
var tail_length = 10;
var tail_height = 20;

var player_1_tail_flag = 0;
var player_2_tail_flag = 0;
var player_1_tail_object;
var player_2_tail_object;

var tail_objects = [];
var tail_player_1 = [];

var player_1_lifes = 3;
var player_2_lifes = 3;

var motorcycle_1_json_path = '../models/classic-1982-tron-light-cycle-red.json';
var motorcycle_2_json_path = '../models/classic-1982-tron-light-cycle-green.json';
var player_1_color = 0xff0000;
var player_2_color = 0x7CFC00;

document.getElementById("player_1_scoreboard").innerHTML = player_1_lifes;
document.getElementById("player_2_scoreboard").innerHTML = player_2_lifes;

window.onload = function() {
    motorcycle_1 = scene.getObjectByName("motorcycle_1");
    motorcycle_2 = scene.getObjectByName("motorcycle_2");
    randomPosition(motorcycle_1, motorcycle_2, 0, environment_size / 4, player_1_orientation);
    initMotorcycle1(motorcycle_1, motorcycle_2);
    initMotorcycle2(motorcycle_2, motorcycle_1);
}

// Draw scene
function render() {
    renderer_main_camera.render(scene, main_camera);
    renderer_player_1_camera.render(scene, player_1_camera);
    renderer_player_2_camera.render(scene, player_2_camera);
}

var animate = function() {
    if(motorcycle_1 && motorcycle_2) {
        player_1_tail_flag = continuosMovement(motorcycle_1, motorcycle_2, 'player_1', player_1_orientation, player_1_camera, player_1_tail_flag);
        player_2_tail_flag = continuosMovement(motorcycle_2, motorcycle_1, 'player_2', player_2_orientation, player_2_camera, player_2_tail_flag);
        // console.log(player_1_tail_flag, player_2_tail_flag);
        console.log(player_1_tail_object, player_2_tail_object);
    }
    requestAnimationFrame(animate);
    render();
};

animate();
