window.onload=function() {
    var motorcycle_2 = scene.getObjectByName("motorcycle_2");
    init(motorcycle_2);
}
  
function init(motorcycle_2){
    //LINEA IMPORTANTE PARA OBTENER EVENTO DEL TECLADO , ESTA TIENE QUE ESTAR AL INICIO DE TODOS LOS DOCUMENTOS, ES UN LISTENER
    document.body.addEventListener('keydown', keyPressed);


    // BUENA INICIALIZACION DE LAS VARIABLES 
    player_2_camera.position.x = motorcycle_2.position.x;
    player_2_camera.position.y = motorcycle_2.position.y -20;
    player_2_camera.position.z = 25;
    player_2_camera.rotation.x = Math.PI / 2;


// METODO PARA QUE SE MUEVA HACIA ADELANTE LA MOTO
function movPerpetuoDelante(){

    if(orientation == 1) {
                    motorcycle_2.position.y += speed;
                    player_2_camera.position.y =motorcycle_2.position.y -20;
                } else if(orientation == 2) {
                    motorcycle_2.position.x += speed;
                    player_2_camera.position.x= motorcycle_2.position.x - 20;
                } else if(orientation == 3) {
                    motorcycle_2.position.y+= -speed;
                    player_2_camera.position.y= motorcycle_2.position.y + 20;
                } else if(orientation == 4) {
                    motorcycle_2.position.x += -speed;
                    player_2_camera.position.x= motorcycle_2.position.x + 20;
                }

}




    

    function keyPressed(keyboardEvent) {
        switch(keyboardEvent.key) {
            
            case 'w':
                if(orientation == 1) {
                    motorcycle_2.position.y += speed;
                    player_2_camera.position.y =motorcycle_2.position.y -20;
                } else if(orientation == 2) {
                    motorcycle_2.position.x += speed;
                    player_2_camera.position.x= motorcycle_2.position.x - 20;
                } else if(orientation == 3) {
                    motorcycle_2.position.y+= -speed;
                    player_2_camera.position.y= motorcycle_2.position.y + 20;
                } else if(orientation == 4) {
                    motorcycle_2.position.x += -speed;
                    player_2_camera.position.x= motorcycle_2.position.x + 20;
                }
                break;
            

            case 'd':
                orientation++;

                if(orientation > 4) {
                    orientation = 1;
                }

                    player_2_camera.position.x= motorcycle_2.position.x;
                    player_2_camera.position.y = motorcycle_2.position.y;

                if(orientation == 1) {
                    player_2_camera.position.y = motorcycle_2.position.y - 20;
                } else if(orientation == 2){
                    player_2_camera.position.x = motorcycle_2.position.x - 20;
                } else if(orientation == 3) {
                    player_2_camera.position.y= motorcycle_2.position.y + 20;
                } else if(orientation == 4) {
                    player_2_camera.position.x = motorcycle_2.position.x + 20;
                }
                
                motorcycle_2.rotation.y -= Math.PI / 2;
                player_2_camera.rotation.y += -Math.PI / 2;
                break;
            
            case 'a':
                orientation--;
                
                if(orientation < 1) {
                    orientation = 4;
                }

                player_2_camera.position.x = motorcycle_2.position.x;
                player_2_camera.position.y = motorcycle_2.position.y;

                if(orientation == 1) {
                    player_2_camera.position.y = motorcycle_2.position.y - 20;
                } else if(orientation == 2) {
                    player_2_camera.position.x = motorcycle_2.position.x - 20;
                } else if(orientation == 3) {
                    player_2_camera.position.y = motorcycle_2.position.y + 20;
                } else if(orientation == 4) {
                    player_2_camera.position.x = motorcycle_2.position.x + 20;
                }

                motorcycle_2.rotation.y += Math.PI / 2;
                player_2_camera.rotation.y += +Math.PI / 2;
                break;
        }
        keyboardEvent.preventDefault();
        collision_wall(motorcycle_2);
        render();
    }
}