var scene = new THREE.Scene();

// add lighting to the environment
var light = new THREE.AmbientLight( 0xffffff ); // soft white light
scene.add( light );

// get the ID from divs where mortorcycles will display them
var moto1 = document.getElementById("motorcycle1");
var moto2 = document.getElementById("motorcycle2");

//paths by default
var motorcycle_json_path = '../../models/classic-1982-tron-light-cycle-blue.json';

// cameras creation
var cameraMoto1 = new THREE.PerspectiveCamera(3000, window.innerWidth / window.innerHeight, 0.1, 10000);
var cameraMoto2 = new THREE.PerspectiveCamera(3000, window.innerWidth / window.innerHeight, 0.1, 10000);
cameraMoto2.position.y = 500;
// renderers for cameras
var renderer_moto_1_camera = new THREE.WebGLRenderer();
var renderer_moto_2_camera = new THREE.WebGLRenderer();

// Specify the size to show in the window - MOTORCYCLE 1
renderer_moto_1_camera.setSize(window.innerWidth / 2, window.innerHeight/2);
moto1 = document.getElementById('motorcycle1');
moto1.appendChild(renderer_moto_1_camera.domElement);

// detect when window resize - update viewport  - MOTORCYCLE 1
window.addEventListener('resize', function() {
  renderer_moto_1_camera.setSize(window.innerWidth / 2, window.innerHeight/2);
  cameraMoto1.aspect = (window.innerWidth / 2) / (window.innerHeight/2);
  cameraMoto1.updateProjectionMatrix();
});

// Specify the size to show in the window - MOTORCYCLE 2
renderer_moto_2_camera.setSize(window.innerWidth / 2, window.innerHeight/2);
moto2 = document.getElementById('motorcycle2');
moto2.appendChild(renderer_moto_2_camera.domElement);

// detect when window resize - update viewport  - MOTORCYCLE 2
window.addEventListener('resize', function() {
  renderer_moto_2_camera.setSize(window.innerWidth / 2, window.innerHeight/2);
  cameraMoto2.aspect = (window.innerWidth / 2) / (window.innerHeight/2);
  cameraMoto2.updateProjectionMatrix();
});

// instantiate a loader - to load the object textures
var motorcycle_1_loader = new THREE.ObjectLoader();
var motorcycle_2_loader = new THREE.ObjectLoader();

var changeColor = function(etiqueta, color){
  if(etiqueta.id == 'motorcycle1'){
    if(color == 'black'){
      moto1.style.webkitFilter = "brightness(50%) grayscale(100%)";
    }else if(color == 'red'){
      moto1.style.webkitFilter = "hue-rotate(180deg)";
    }else if(color == 'green'){
      moto1.style.webkitFilter = "hue-rotate(300deg)";
    }else if(color == 'pink'){
      moto1.style.webkitFilter = "hue-rotate(120deg)";
    }else{
      moto1.style.webkitFilter = "hue-rotate(0deg)";
    }
  }else if(etiqueta.id == 'motorcycle2'){
    if(color == 'black'){
      moto2.style.webkitFilter = "brightness(50%) grayscale(100%)";
    }else if(color == 'red'){
      moto2.style.webkitFilter = "hue-rotate(180deg)";
    }else if(color == 'green'){
      moto2.style.webkitFilter = "hue-rotate(300deg)";
    }else if(color == 'pink'){
      moto2.style.webkitFilter = "hue-rotate(120deg)";
    }else{
      moto2.style.webkitFilter = "hue-rotate(0deg)";
    }
  }
}

motorcycle_1_loader.load(
    // resource URL
    motorcycle_json_path,
    // called when resource is loaded
    function(motorcycle) {
        // Size of the motorcycle
        motorcycle.scale.set(1, 1, 1);
        motorcycle.position.z = -2;
        motorcycle.rotation.y = 5000;
        // Add motorcycle to the environment
        scene.add(motorcycle);

    },
);

motorcycle_2_loader.load(
    // resource URL
    motorcycle_json_path,
    // called when resource is loaded
    function(motorcycle) {
        // Size of the motorcycle
        motorcycle.scale.set(1, 1, 1);
        motorcycle.position.y = 500;
        motorcycle.position.z = -2;
        motorcycle.rotation.y = 5000;
        // Add motorcycle to the environment
        scene.add(motorcycle);

    },
);
/*
var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({color: 0x27aae2, wireframe: false});
var cube = new THREE.Mesh(geometry, material);
cube.position.z = -1;
scene.add(cube);

var geometry2 = new THREE.BoxGeometry(1,1,1);
var material2 = new THREE.MeshBasicMaterial({color: 0x1de9e9, wireframe: false});
var cube2 = new THREE.Mesh(geometry2, material2);
cube2.position.z = -1;
cube2.position.y = 500;
scene.add(cube2);
*/
var update = function(){
  //cube.rotation.y += 0.01;
  //cube2.rotation.y += 0.01;
};

var render = function(){
  renderer_moto_1_camera.render(scene, cameraMoto1);
  renderer_moto_2_camera.render(scene, cameraMoto2);
};

var loopCustom = function(){
  requestAnimationFrame(loopCustom);
  update();
  render();
};

loopCustom();
