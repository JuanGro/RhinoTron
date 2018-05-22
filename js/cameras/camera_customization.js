function startCamera(renderer, player_camera, id_camera) {
  // Specify the size to show in the window
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  container = document.getElementById(id_camera);
  container.appendChild(renderer.domElement);

  // detect when window resize
  window.addEventListener('resize', function() {
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    player_camera.aspect = window.innerWidth / window.innerHeight;
    player_camera.updateProjectionMatrix();
  });

  // inital position of player_camera to can resize window
  player_camera.position.z = 10;
  player_camera.position.y = -40;
  player_camera.rotation.x = Math.PI / 2;
}