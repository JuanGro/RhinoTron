// Specify the size to show in the window
renderer_player_2_camera.setSize(window.innerWidth / 5, window.innerHeight / 5);
container_3 = document.getElementById('player_2_camera');
document.body.appendChild(container_3);
container_3.appendChild(renderer_player_2_camera.domElement);

// detect when window resize
window.addEventListener('resize', function() {
  renderer_player_2_camera.setSize(window.innerWidth / 5, window.innerHeight / 5);
  player_2_camera.aspect = window.innerWidth / window.innerHeight;
  player_2_camera.updateProjectionMatrix();
});

// inital position of player_2_camera to can resize window
player_2_camera.position.z = 10;
player_2_camera.rotation.x = Math.PI / 2;