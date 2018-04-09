window.onload=function() {
    var motorcycle_1 = scene.getObjectByName("motorcycle_1");
    init(motorcycle_1);
}
  
function init(motorcycle){
    // Listener
    document.body.addEventListener('keydown', keyPressed);

    function keyPressed(keyboardEvent) {
        switch(keyboardEvent.key) {
            case 'ArrowUp':
                if(orientation == 1) {
                    motorcycle.position.y += speed;
                    // camera.position.y = motorcycle.position.y - 15;
                } else if(orientation == 2) {
                    motorcycle.position.x += speed;
                    // camera.position.x = motorcycle.position.x - 15;
                } else if(orientation == 3) {
                    motorcycle.position.y+= -speed;
                    // camera.position.y = motorcycle.position.y + 15;
                } else if(orientation == 4) {
                    motorcycle.position.x += -speed;
                    // camera.position.x = motorcycle.position.x + 15;
                }
                break;

            case 'ArrowRight':
                orientation++;

                if(orientation > 4) {
                    orientation = 1;
                }

                // camera.position.x = motorcycle.position.x;
                // camera.position.y = motorcycle.position.y;

                if(orientation == 1) {
                    // camera.position.y = motorcycle.position.y - 15;
                } else if(orientation == 2){
                    // camera.position.x = motorcycle.position.x - 15;
                } else if(orientation == 3) {
                    // camera.position.y = motorcycle.position.y + 15;
                } else if(orientation == 4) {
                    // camera.position.x = motorcycle.position.x + 15;
                }
                
                motorcycle.rotation.y -= Math.PI / 2;
                // camera.rotation.y += -Math.PI / 2;
                break;
            
            case 'ArrowLeft':
                orientation--;
                
                if(orientation < 1) {
                    orientation = 4;
                }

                // camera.position.x = motorcycle.position.x;
                // camera.position.y = motorcycle.position.y;

                if(orientation == 1) {
                    // camera.position.y = motorcycle.position.y - 15;
                } else if(orientation == 2) {
                    // camera.position.x = motorcycle.position.x - 15;
                } else if(orientation == 3) {
                    // camera.position.y = motorcycle.position.y + 15;
                } else if(orientation == 4) {
                    // camera.position.x = motorcycle.position.x + 15;
                }

                motorcycle.rotation.y += Math.PI / 2;
                // camera.rotation.y += +Math.PI / 2;
                break;
        }
        keyboardEvent.preventDefault();
        collision_wall(motorcycle);
        render();
    }
}