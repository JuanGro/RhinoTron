// instantiate a loader
var loader = new THREE.ObjectLoader();

var moto_json_path = '../models/classic-1982-tron-light-cycle-green.json';

buildMoto(moto_json_path, "moto2", scene, -environment_size / 4, 0);