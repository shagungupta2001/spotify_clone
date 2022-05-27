console.log("Welcome to spotify")

//initialize the variable
let songindex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressbar = document.getElementById('myProgressbar');

let songs = [
        { songName: "Let-Me-Love-You ", filepath: "1.mp3", coverpath: "" }
    ]
    // audioElement.play();
    //handle play/pause click
masterplay.addEventListener('click', () => {
        if (audioElement.pause || audioElement.currentTime <= 0) {
            audioElement.play();
        }
    })
    //Listen to events
document.addEventListener('time')
myProgressbar.addEventListener('timeupdate', () => {
    console.log('timeupdate');
})