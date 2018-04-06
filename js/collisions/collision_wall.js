// Moto 1
var motorcycle_1 = scene.getObjectByName("motorcycle_1");
if(motorcycle_1.position.y>150 || motorcycle_1.position.y< -150 ){
    console.log("Te saliste alv");
}

if(motorcycle_1.position.x>pisoAncho/2 ){
    console.log("Te saliste alv");
}

console.log(motorcycle_1.position.x,motorcycle_1.position.y);