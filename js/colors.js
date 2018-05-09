var motos = {
  moto1: {
    path:  '../../models/classic-1982-tron-light-cycle-red.json',
    color: 'rgb(255, 0, 0)',
  },
  moto2: {
    path:  '../../models/classic-1982-tron-light-cycle-green.json',
    color: 'rgb(49, 233, 12)',
  }
};


var motorcycles = motos;

var changeColor = function(etiqueta, color){
  if(etiqueta.id == 'motorcycle1'){
    if(color == 'black'){
      moto1.style.webkitFilter = "brightness(50%) grayscale(100%)";
      motorcycles.moto1.path = '../../models/classic-1982-tron-light-cycle-black.json';
      motorcycles.moto1.color = 'rgba(76, 78, 72, 0.67)';
    }else if(color == 'red'){
      moto1.style.webkitFilter = "hue-rotate(180deg)";
      motorcycles.moto1.path = '../../models/classic-1982-tron-light-cycle-red.json';
      motorcycles.moto1.color = 'rgb(255, 0, 0)';
    }else if(color == 'green'){
      moto1.style.webkitFilter = "hue-rotate(300deg)";
      motorcycles.moto1.path = '../../models/classic-1982-tron-light-cycle-green.json';
      motorcycles.moto1.color = 'rgb(49, 233, 12)';
    }else if(color == 'pink'){
      moto1.style.webkitFilter = "hue-rotate(120deg)";
      motorcycles.moto1.path = '../../models/classic-1982-tron-light-cycle-pink.json';
      motorcycles.moto1.color = 'rgb(226, 41, 196)';
    }else{
      moto1.style.webkitFilter = "hue-rotate(0deg)";
      motorcycles.moto1.path = '../../models/classic-1982-tron-light-cycle-blue.json';
      motorcycles.moto1.color = 'rgb(22, 178, 236)';
    }
  }else if(etiqueta.id == 'motorcycle2'){
    if(color == 'black'){
      moto2.style.webkitFilter = "brightness(50%) grayscale(100%)";
      motorcycles.moto2.path = '../../models/classic-1982-tron-light-cycle-black.json';
      color2 = 'rgba(76, 78, 72, 0.67)';
      motorcycles.moto2.color = color2;
    }else if(color == 'red'){
      moto2.style.webkitFilter = "hue-rotate(180deg)";
      motorcycles.moto2.path = '../../models/classic-1982-tron-light-cycle-red.json';
      motorcycles.moto2.color = 'rgb(255, 0, 0)';
    }else if(color == 'green'){
      moto2.style.webkitFilter = "hue-rotate(300deg)";
      motorcycles.moto2.path = '../../models/classic-1982-tron-light-cycle-green.json';
      motorcycles.moto2.color = 'rgb(49, 233, 12)';
    }else if(color == 'pink'){
      moto2.style.webkitFilter = "hue-rotate(120deg)";
      motorcycles.moto2.path = '../../models/classic-1982-tron-light-cycle-pink.json';
      motorcycles.moto2.color = 'rgb(226, 41, 196)';
    }else{
      moto2.style.webkitFilter = "hue-rotate(0deg)";
      motorcycles.moto2.path = '../../models/classic-1982-tron-light-cycle-blue.json';
      motorcycles.moto2.color = 'rgb(22, 178, 236)';
    }
  }
}

function selectedColor(id, flag, p1, p2, c1, c2){
  console.log("Flag "+flag);
  console.log("Path1 "+p1);
  console.log("Color1 "+c1);
  console.log("Path2 "+p2);
  console.log("Color1 "+c2);
  if(flag == 0){
    motos.moto1.color = c1;
    motos.moto1.path = p1;
    motos.moto2.color = c2;
    motos.moto2.path = p2;
  }else if(flag == 1){
    motorcycles.moto1.color = p1.moto1.color;
    motorcycles.moto1.path = p2.moto1.path;
    motorcycles.moto2.color = c1.moto2.color;
    motorcycles.moto2.path = c2.moto2.path;
  }
}
