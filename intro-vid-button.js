const introVidButton = document.querySelector('.intro-vid-button');
const introVideo = document.querySelector('.intro-video');
let videoState = true;

introVidButton.addEventListener('click', () => {
    if (videoState === true) {
        introVideo.pause();
        playButton();
        videoState = false;
    } else {
        introVideo.play();
        pauseButton();
        videoState = true;
    }
});

function pauseButton() {
    introVidButton.innerHTML = `<i class="material-icons">
                                pause
                            </i>`;
}

function playButton() {
    introVidButton.innerHTML = `<i class="material-icons">
                                play_arrow
                            </i>`;
}