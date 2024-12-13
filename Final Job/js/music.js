const musicbtn = document.querySelector(".musicbtn");

function PlayMusic() {
    const audio = document.querySelector("audio");
    if (!audio.paused) {
        audio.pause();  // 노래를 멈춤
    } else {
        audio.play();   // 노래를 재생
    }
}

musicbtn.addEventListener("click", PlayMusic);
