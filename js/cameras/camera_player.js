function startPlayerCamera(renderer, player_camera, color, id_camera) {
  // Specify the size to show in the window
  renderer.setSize(window.innerWidth / 5, window.innerHeight / 5);
  container = document.getElementById(id_camera);
  console.log(color);
  container.style.borderColor = color;
  document.body.appendChild(container);
  container.appendChild(renderer.domElement);

  // detect when window resize
  window.addEventListener('resize', function() {
    renderer.setSize(window.innerWidth / 5, window.innerHeight / 5);
    player_camera.aspect = window.innerWidth / window.innerHeight;
    player_camera.updateProjectionMatrix();
  });

  // inital position of player_camera to can resize window
  player_camera.position.z = 10;
  player_camera.rotation.x = Math.PI / 2;
}