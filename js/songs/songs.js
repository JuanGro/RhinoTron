var song, sound;

function play(divId, typeSound) {
    if (typeSound == 'song') {
        song = document.getElementById(divId.id);
        song.volume = 1;
        song.play();
    } else {
        sound = document.getElementById(divId.id);
        sound.volume = 1;
        sound.play();
    }
}

function pauseSong() {
    if (song) {
        song.pause(); 
        song.load();
    }
}

function valueSong(path) {
    localStorage.setItem("music_path", path);
}

function playSelectedSong() {
    if (getFromLocalStorage("music_path")) {
        song = document.getElementById("song");
        song.src = getFromLocalStorage("music_path");
    }
}