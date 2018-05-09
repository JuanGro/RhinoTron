var changeColor = function(etiqueta, color){
  if(etiqueta.id == 'motorcycle1'){
    if(color == 'black'){
      moto1.style.webkitFilter = "brightness(50%) grayscale(100%)";
      path1 = '../../models/classic-1982-tron-light-cycle-black.json';
      color1 = 'rgba(76, 78, 72, 0.67)';
    }else if(color == 'red'){
      moto1.style.webkitFilter = "hue-rotate(180deg)";
      path1 = '../../models/classic-1982-tron-light-cycle-red.json';
      color1 = 'rgb(255, 0, 0)';
    }else if(color == 'green'){
      moto1.style.webkitFilter = "hue-rotate(300deg)";
      path1 = '../../models/classic-1982-tron-light-cycle-green.json';
      color1 = 'rgb(49, 233, 12)';
    }else if(color == 'pink'){
      moto1.style.webkitFilter = "hue-rotate(120deg)";
      path1 = '../../models/classic-1982-tron-light-cycle-pink.json';
      color1 = 'rgb(226, 41, 196)';
    }else{
      moto1.style.webkitFilter = "hue-rotate(0deg)";
      path1 = '../../models/classic-1982-tron-light-cycle-blue.json';
      color1 = 'rgb(22, 178, 236)';
    }
  }else if(etiqueta.id == 'motorcycle2'){
    if(color == 'black'){
      moto2.style.webkitFilter = "brightness(50%) grayscale(100%)";
      path2 = '../../models/classic-1982-tron-light-cycle-black.json';
      color2 = 'rgba(76, 78, 72, 0.67)';
    }else if(color == 'red'){
      moto2.style.webkitFilter = "hue-rotate(180deg)";
      path2 = '../../models/classic-1982-tron-light-cycle-red.json';
      color2 = 'rgb(255, 0, 0)';
    }else if(color == 'green'){
      moto2.style.webkitFilter = "hue-rotate(300deg)";
      path2 = '../../models/classic-1982-tron-light-cycle-green.json';
      color2 = 'rgb(49, 233, 12)';
    }else if(color == 'pink'){
      moto2.style.webkitFilter = "hue-rotate(120deg)";
      path2 = '../../models/classic-1982-tron-light-cycle-pink.json';
      color2 = 'rgb(226, 41, 196)';
    }else{
      moto2.style.webkitFilter = "hue-rotate(0deg)";
      path2 = '../../models/classic-1982-tron-light-cycle-blue.json';
      color2 = 'rgb(22, 178, 236)';
    }
  }
}