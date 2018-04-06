window.onload=function(){
    init();
    animate();
}
  
function init(){
    //LINEA IMPORTANTE PARA OBTENER EVENTO DEL TECLADO , ESTA TIENE QUE ESTAR AL INICIO DE TODOS LOS DOCUMENTOS, ES UN LISTENER
    document.body.addEventListener('keydown', keyPressed);
    var moto1 = scene.getObjectByName("Moto");
    var orientacion = 1;
    var speed = 10;

    function keyPressed(eventoTeclado){
        switch(eventoTeclado.key) {
            case 'ArrowUp':
                if(orientacion == 1) {
                    moto1.position.y += speed;
                    // camera.position.y = moto1.position.y - 15;
                } else if(orientacion == 2) {
                    moto1.position.x += speed;
                    // camera.position.x = moto1.position.x - 15;
                } else if(orientacion == 3) {
                    moto1.position.y+= -speed;
                    // camera.position.y = moto1.position.y + 15;
                } else if(orientacion == 4) {
                    moto1.position.x += -speed;
                    // camera.position.x = moto1.position.x + 15;
                }
                break;

            case 'ArrowRight':
                orientacion++;

                if(orientacion > 4) {
                    orientacion = 1;
                }

                // camera.position.x = moto1.position.x;
                // camera.position.y = moto1.position.y;

                if(orientacion == 1) {
                    // camera.position.y = moto1.position.y - 15;
                } else if(orientacion == 2){
                    // camera.position.x = moto1.position.x - 15;
                } else if(orientacion == 3) {
                    // camera.position.y = moto1.position.y + 15;
                } else if(orientacion == 4) {
                    // camera.position.x = moto1.position.x + 15;
                }
                
                moto1.rotation.y -= Math.PI / 2;
                // camera.rotation.y += -Math.PI / 2;
                break;
            
            case 'ArrowLeft':
                orientacion--;
                
                if(orientacion < 1) {
                    orientacion = 4;
                }

                // camera.position.x = moto1.position.x;
                // camera.position.y = moto1.position.y;

                if(orientacion == 1) {
                    // camera.position.y = moto1.position.y - 15;
                } else if(orientacion == 2) {
                    // camera.position.x = moto1.position.x - 15;
                } else if(orientacion == 3) {
                    // camera.position.y = moto1.position.y + 15;
                } else if(orientacion == 4) {
                    // camera.position.x = moto1.position.x + 15;
                }

                moto1.rotation.y += Math.PI / 2;
                // camera.rotation.y += +Math.PI / 2;
                break;
        }
        eventoTeclado.preventDefault();
        render();
    }
}

function animate() { 
    requestAnimationFrame(animate);
    render();
}