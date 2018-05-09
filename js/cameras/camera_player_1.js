// Specify the size to show in the window
renderer_player_1_camera.setSize(window.innerWidth / 5, window.innerHeight / 5);
container_2 = document.getElementById('player_1_camera');
document.body.appendChild(container_2);
container_2.style.borderColor = motos.moto1.color;
container_2.appendChild(renderer_player_1_camera.domElement);

// detect when window resize
window.addEventListener('resize', function() {
  renderer_player_1_camera.setSize(window.innerWidth / 5, window.innerHeight / 5);
  player_1_camera.aspect = window.innerWidth / window.innerHeight;
  player_1_camera.updateProjectionMatrix();
});

// inital position of player_1_camera to can resize window
player_1_camera.position.z = 10;
player_1_camera.rotation.x = Math.PI / 2;
