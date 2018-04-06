window.onload=function(){
    init();
    animate();
}
  
function init(){
    //LINEA IMPORTANTE PARA OBTENER EVENTO DEL TECLADO , ESTA TIENE QUE ESTAR AL INICIO DE TODOS LOS DOCUMENTOS, ES UN LISTENER
    document.body.addEventListener('keydown', keyPressed);
    var motorcycle_1 = scene.getObjectByName("motorcycle_1");

    function keyPressed(keyboardEvent) {
        switch(keyboardEvent.key) {
            case 'ArrowUp':
                if(orientation == 1) {
                    motorcycle_1.position.y += speed;
                    // camera.position.y = motorcycle_1.position.y - 15;
                } else if(orientation == 2) {
                    motorcycle_1.position.x += speed;
                    // camera.position.x = motorcycle_1.position.x - 15;
                } else if(orientation == 3) {
                    motorcycle_1.position.y+= -speed;
                    // camera.position.y = motorcycle_1.position.y + 15;
                } else if(orientation == 4) {
                    motorcycle_1.position.x += -speed;
                    // camera.position.x = motorcycle_1.position.x + 15;
                }
                break;

            case 'ArrowRight':
                orientation++;

                if(orientation > 4) {
                    orientation = 1;
                }

                // camera.position.x = motorcycle_1.position.x;
                // camera.position.y = motorcycle_1.position.y;

                if(orientation == 1) {
                    // camera.position.y = motorcycle_1.position.y - 15;
                } else if(orientation == 2){
                    // camera.position.x = motorcycle_1.position.x - 15;
                } else if(orientation == 3) {
                    // camera.position.y = motorcycle_1.position.y + 15;
                } else if(orientation == 4) {
                    // camera.position.x = motorcycle_1.position.x + 15;
                }
                
                motorcycle_1.rotation.y -= Math.PI / 2;
                // camera.rotation.y += -Math.PI / 2;
                break;
            
            case 'ArrowLeft':
                orientation--;
                
                if(orientation < 1) {
                    orientation = 4;
                }

                // camera.position.x = motorcycle_1.position.x;
                // camera.position.y = motorcycle_1.position.y;

                if(orientation == 1) {
                    // camera.position.y = motorcycle_1.position.y - 15;
                } else if(orientation == 2) {
                    // camera.position.x = motorcycle_1.position.x - 15;
                } else if(orientation == 3) {
                    // camera.position.y = motorcycle_1.position.y + 15;
                } else if(orientation == 4) {
                    // camera.position.x = motorcycle_1.position.x + 15;
                }

                motorcycle_1.rotation.y += Math.PI / 2;
                // camera.rotation.y += +Math.PI / 2;
                break;
        }
        keyboardEvent.preventDefault();
        render();
    }
}

function animate() { 
    requestAnimationFrame(animate);
    render();
}