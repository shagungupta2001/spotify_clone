console.log("Welcome to spotify")

//initialize the variable
let songindex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressbar = document.getElementById('myProgressbar');
// let gif = document.getElementById("gif");
let songs = [
        { songName: "Let-Me-Love-You ", filepath: "1.mp3", coverpath: "1.jpeg" }
    ]
    // audioElement.play();
    //handle play/pause click
masterplay.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterplay.classList.remove("fa-circle-play");
            masterplay.classList.add("fa-circle-pause");
            // gif.style.opacity = 1;

        } else {
            audioElement.pause();
            masterplay.classList.remove("fa-circle-pause");
            masterplay.classList.add("fa-circle-play");
            // gif.style.opacity = 0;
        }
    })
    //Listen to events
    // document.addEventListener('time') 
myProgressbar.addEventListener('timeupdate', () => {
    console.log('timeupdate');

    //update seekbar
    // progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    // myProgressbar.value = progress;

})