// Add FPS monitor
(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(script);})()

var scene = new THREE.Scene();

// get the ID from divs where mortorcycles will display them
var moto1 = document.getElementById("motorcycle1");
var moto2 = document.getElementById("motorcycle2");

var changeColor = function(etiqueta, color){
  if(etiqueta.id == 'motorcycle1'){
    if(color == 'black'){
      moto1.style.webkitFilter = "brightness(50%) grayscale(100%)";
      motos.moto1.path = '../../models/classic-1982-tron-light-cycle-black.json';
      motos.moto1.color = 'rgba(76, 78, 72, 0.67)';
    }else if(color == 'red'){
      moto1.style.webkitFilter = "hue-rotate(180deg)";
      motos.moto1.path = '../../models/classic-1982-tron-light-cycle-red.json';
      motos.moto1.color = 'rgb(255, 0, 0)';
    }else if(color == 'green'){
      moto1.style.webkitFilter = "hue-rotate(300deg)";
      motos.moto1.path = '../../models/classic-1982-tron-light-cycle-green.json';
      motos.moto1.color = 'rgb(49, 233, 12)';
    }else if(color == 'pink'){
      moto1.style.webkitFilter = "hue-rotate(120deg)";
      motos.moto1.path = '../../models/classic-1982-tron-light-cycle-pink.json';
      motos.moto1.color = 'rgb(226, 41, 196)';
    }else{
      moto1.style.webkitFilter = "hue-rotate(0deg)";
      motos.moto1.path = '../../models/classic-1982-tron-light-cycle-blue.json';
      motos.moto1.color = 'rgb(22, 178, 236)';
    }
  }else if(etiqueta.id == 'motorcycle2'){
    if(color == 'black'){
      moto2.style.webkitFilter = "brightness(50%) grayscale(100%)";
      motos.moto2.path = '../../models/classic-1982-tron-light-cycle-black.json';
      motos.moto2.color = 'rgba(76, 78, 72, 0.67)';
    }else if(color == 'red'){
      moto2.style.webkitFilter = "hue-rotate(180deg)";
      motos.moto2.path = '../../models/classic-1982-tron-light-cycle-red.json';
      motos.moto2.color = 'rgb(255, 0, 0)';
    }else if(color == 'green'){
      moto2.style.webkitFilter = "hue-rotate(300deg)";
      motos.moto2.path = '../../models/classic-1982-tron-light-cycle-green.json';
      motos.moto2.color = 'rgb(49, 233, 12)';
    }else if(color == 'pink'){
      moto2.style.webkitFilter = "hue-rotate(120deg)";
      motos.moto2.path = '../../models/classic-1982-tron-light-cycle-pink.json';
      motos.moto2.color = 'rgb(226, 41, 196)';
    }else{
      moto2.style.webkitFilter = "hue-rotate(0deg)";
      motos.moto2.path = '../../models/classic-1982-tron-light-cycle-blue.json';
      motos.moto2.color = 'rgb(22, 178, 236)';
    }
  }
}

var update = function(){

};

var render = function(){

};

var loopCustom = function(){
  requestAnimationFrame(loopCustom);
  update();
  render();
};

loopCustom();
