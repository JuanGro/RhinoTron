// instantiate a loader
var loader = new THREE.ObjectLoader();

var moto_json_path = '../models/classic-1982-tron-light-cycle-red.json';

buildMoto(moto_json_path, "moto1", scene, 0, environment_size / 4);
