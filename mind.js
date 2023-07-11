let time = document.getElementById('time');
const btn = document.getElementById('btn');
const hourVal = document.getElementById('hourVal');
const minVal = document.getElementById('minVal');
const sessionVal = document.getElementById('sessionVal');
const myAudio = document.getElementById('audio');
function Time() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = 'AM';
    if (hour == 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }
    let fullTime = hour + ":" + min + ":" + sec + " " + session;
    time.innerHTML = fullTime;

    // Alarm Logic
    if (hour == hourVal.value) {
        if (min == minVal.value) {
            console.log("Ringing")
            myAudio.play();
        }
    }

}
setInterval(Time, 1000);
btn.addEventListener('click',Time);