window.onload=function(){
    init();
    animate();
}
  
function init(){
    //LINEA IMPORTANTE PARA OBTENER EVENTO DEL TECLADO , ESTA TIENE QUE ESTAR AL INICIO DE TODOS LOS DOCUMENTOS, ES UN LISTENER
    document.body.addEventListener('keydown', keyPressed);
    var moto1 = scene.getObjectByName("moto1");
    var orientation = 1;
    var speed = 10;

    function keyPressed(eventoTeclado) {
        switch(eventoTeclado.key) {
            case 'ArrowUp':
                if(orientation == 1) {
                    moto1.position.y += speed;
                    // camera.position.y = moto1.position.y - 15;
                } else if(orientation == 2) {
                    moto1.position.x += speed;
                    // camera.position.x = moto1.position.x - 15;
                } else if(orientation == 3) {
                    moto1.position.y+= -speed;
                    // camera.position.y = moto1.position.y + 15;
                } else if(orientation == 4) {
                    moto1.position.x += -speed;
                    // camera.position.x = moto1.position.x + 15;
                }
                break;

            case 'ArrowRight':
                orientation++;

                if(orientation > 4) {
                    orientation = 1;
                }

                // camera.position.x = moto1.position.x;
                // camera.position.y = moto1.position.y;

                if(orientation == 1) {
                    // camera.position.y = moto1.position.y - 15;
                } else if(orientation == 2){
                    // camera.position.x = moto1.position.x - 15;
                } else if(orientation == 3) {
                    // camera.position.y = moto1.position.y + 15;
                } else if(orientation == 4) {
                    // camera.position.x = moto1.position.x + 15;
                }
                
                moto1.rotation.y -= Math.PI / 2;
                // camera.rotation.y += -Math.PI / 2;
                break;
            
            case 'ArrowLeft':
                orientation--;
                
                if(orientation < 1) {
                    orientation = 4;
                }

                // camera.position.x = moto1.position.x;
                // camera.position.y = moto1.position.y;

                if(orientation == 1) {
                    // camera.position.y = moto1.position.y - 15;
                } else if(orientation == 2) {
                    // camera.position.x = moto1.position.x - 15;
                } else if(orientation == 3) {
                    // camera.position.y = moto1.position.y + 15;
                } else if(orientation == 4) {
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