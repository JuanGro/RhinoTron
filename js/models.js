// instantiate a loader
var loader = new THREE.ObjectLoader();

// load a resource
loader.load(

	// resource URL
	'../models/motorcycle.json',

	// called when resource is loaded
	function ( object ){
    // Add motorcycle in a random position
    object.position.y = 1;
    object.position.x = Math.floor(Math.random() * (201 - (-201))) + (-201);
    object.position.z = Math.floor(Math.random() * (201 - (-201))) + (-201);
    // increment the size of the object
    object.scale.set(15, 10, 10);
		scene.add( object );
	},

	// called when loading is in progresses
	function ( xhr ){
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},

	// called when loading has errors
	function ( error ){
		console.log( 'An error happened' );
	}

);
