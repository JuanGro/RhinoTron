// Specify the size to show in the window
renderer_main_camera.setSize(window.innerWidth, window.innerHeight);
container = document.getElementById('main_camera');
document.body.appendChild(container);
container.appendChild(renderer_main_camera.domElement);

// detect when window resize
window.addEventListener('resize', function() {
  renderer_main_camera.setSize(window.innerWidth, window.innerHeight);
  main_camera.aspect = window.innerWidth / window.innerHeight;
  main_camera.updateProjectionMatrix();
});

// inital position of main_camera to can resize window
main_camera.position.x = 0;
main_camera.position.y = 0;
main_camera.position.z = environment_size / 2;