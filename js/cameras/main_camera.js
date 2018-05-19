function startMainCamera(renderer, camera, environment_size, id_camera) {
  // Specify the size to show in the window
  renderer.setSize(window.innerWidth, window.innerHeight);
  container = document.getElementById(id_camera);
  document.body.appendChild(container);
  container.appendChild(renderer.domElement);

  // detect when window resize
  window.addEventListener('resize', function() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  // inital position of camera to can resize window
  camera.position.z = environment_size / 2;
}