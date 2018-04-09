window.onload=function() {
    var motorcycle_1 = scene.getObjectByName("motorcycle_1");
    init(motorcycle_1);
}
  
function init(motorcycle_1){
    //LINEA IMPORTANTE PARA OBTENER EVENTO DEL TECLADO , ESTA TIENE QUE ESTAR AL INICIO DE TODOS LOS DOCUMENTOS, ES UN LISTENER
    document.body.addEventListener('keydown', keyPressed);


    // BUENA INICIALIZACION DE LAS VARIABLES 
    player_1_camera.position.x = motorcycle_1.position.x;
    player_1_camera.position.y = motorcycle_1.position.y -20;
    player_1_camera.position.z = 25;
    player_1_camera.rotation.x = Math.PI / 2;

function movPerpetuoDelante(){

    if(orientation == 1) {
                    motorcycle_1.position.y += speed;
                    player_1_camera.position.y =motorcycle_1.position.y -20;
                } else if(orientation == 2) {
                    motorcycle_1.position.x += speed;
                    player_1_camera.position.x= motorcycle_1.position.x - 20;
                } else if(orientation == 3) {
                    motorcycle_1.position.y+= -speed;
                    player_1_camera.position.y= motorcycle_1.position.y + 20;
                } else if(orientation == 4) {
                    motorcycle_1.position.x += -speed;
                    player_1_camera.position.x= motorcycle_1.position.x + 20;
                }

}




    

    function keyPressed(keyboardEvent) {
        switch(keyboardEvent.key) {
            
            case 'ArrowUp':
                if(orientation == 1) {
                    motorcycle_1.position.y += speed;
                    player_1_camera.position.y =motorcycle_1.position.y -20;
                } else if(orientation == 2) {
                    motorcycle_1.position.x += speed;
                    player_1_camera.position.x= motorcycle_1.position.x - 20;
                } else if(orientation == 3) {
                    motorcycle_1.position.y+= -speed;
                    player_1_camera.position.y= motorcycle_1.position.y + 20;
                } else if(orientation == 4) {
                    motorcycle_1.position.x += -speed;
                    player_1_camera.position.x= motorcycle_1.position.x + 20;
                }
                break;
            

            case 'ArrowRight':
                orientation++;

                if(orientation > 4) {
                    orientation = 1;
                }

                    player_1_camera.position.x= motorcycle_1.position.x;
                    player_1_camera.position.y = motorcycle_1.position.y;

                if(orientation == 1) {
                    player_1_camera.position.y = motorcycle_1.position.y - 20;
                } else if(orientation == 2){
                    player_1_camera.position.x = motorcycle_1.position.x - 20;
                } else if(orientation == 3) {
                    player_1_camera.position.y= motorcycle_1.position.y + 20;
                } else if(orientation == 4) {
                    player_1_camera.position.x = motorcycle_1.position.x + 20;
                }
                
                motorcycle_1.rotation.y -= Math.PI / 2;
                player_1_camera.rotation.y += -Math.PI / 2;
                break;
            
            case 'ArrowLeft':
                orientation--;
                
                if(orientation < 1) {
                    orientation = 4;
                }

                player_1_camera.position.x = motorcycle_1.position.x;
                player_1_camera.position.y = motorcycle_1.position.y;

                if(orientation == 1) {
                    player_1_camera.position.y = motorcycle_1.position.y - 20;
                } else if(orientation == 2) {
                    player_1_camera.position.x = motorcycle_1.position.x - 20;
                } else if(orientation == 3) {
                    player_1_camera.position.y = motorcycle_1.position.y + 20;
                } else if(orientation == 4) {
                    player_1_camera.position.x = motorcycle_1.position.x + 20;
                }

                motorcycle_1.rotation.y += Math.PI / 2;
                player_1_camera.rotation.y += +Math.PI / 2;
                break;
        }
        keyboardEvent.preventDefault();
        collision_wall(motorcycle_1);
        render();
    }
}