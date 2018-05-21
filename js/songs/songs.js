var song = document.getElementById("song");
song.volume = 0.13; 

var sound;

function playSelectSound(divId) {
    sound = document.getElementById(divId.id);
    sound.volume = 1;
    sound.play();
}

var x = document.getElementById("TronLegacy");  

function playAudio(number) { 
    if(number == 1) {
        x = document.getElementById("TronLegacy");
    } else if(number == 2) {
        x = document.getElementById("EndOfLine"); 
    } else if(number == 3) {
        x = document.getElementById("Derezzed"); 
    }
    x.volume = 0.13;
    x.play(); 
} 

function pauseAudio() { 
    x.pause(); 
    x.load();
} 

function valueSong(path) {
    localStorage.setItem("storageName", path);
}

function play() {
    sound.play();
}