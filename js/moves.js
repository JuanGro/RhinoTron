function up(moto, orientation, speed) {
    if(orientation == 1) {
        moto.position.y += speed;
        // camera.position.y = moto.position.y - 15;
    } else if(orientation == 2) {
        moto.position.x += speed;
        // camera.position.x = moto.position.x - 15;
    } else if(orientation == 3) {
        moto.position.y+= -speed;
        // camera.position.y = moto.position.y + 15;
    } else if(orientation == 4) {
        moto.position.x += -speed;
        // camera.position.x = moto.position.x + 15;
    }
}

function right(moto, orientation) {
    orientation++;

    if(orientation > 4) {
        orientation = 1;
    }

    // camera.position.x = moto.position.x;
    // camera.position.y = moto.position.y;

    if(orientation == 1) {
        // camera.position.y = moto.position.y - 15;
    } else if(orientation == 2){
        // camera.position.x = moto.position.x - 15;
    } else if(orientation == 3) {
        // camera.position.y = moto.position.y + 15;
    } else if(orientation == 4) {
        // camera.position.x = moto.position.x + 15;
    }
    
    moto.rotation.y -= Math.PI / 2;
    // camera.rotation.y += -Math.PI / 2;

    return orientation;
}

function left(moto, orientation) {
    orientation--;
                
    if(orientation < 1) {
        orientation = 4;
    }

    // camera.position.x = moto.position.x;
    // camera.position.y = moto.position.y;

    if(orientation == 1) {
        // camera.position.y = moto.position.y - 15;
    } else if(orientation == 2) {
        // camera.position.x = moto.position.x - 15;
    } else if(orientation == 3) {
        // camera.position.y = moto.position.y + 15;
    } else if(orientation == 4) {
        // camera.position.x = moto.position.x + 15;
    }

    moto.rotation.y += Math.PI / 2;
    // camera.rotation.y += +Math.PI / 2;

    return orientation;
}