const introVidButton = document.querySelector('.intro-vid-button');
const introVideo = document.querySelector('.intro-video');
let IntroVideoState = true;

introVidButton.addEventListener('click', () => {
    if (IntroVideoState === true) {
        introVideo.pause();
        playButton();
        IntroVideoState = false;
    } else {
        introVideo.play();
        pauseButton();
        IntroVideoState = true;
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

const researchVidButton = document.querySelector('.research-vid-button');
const researchVideo = document.querySelector('.research-video');
let ResearchVideoState = true;

researchVidButton.addEventListener('click', () => {
    if (ResearchVideoState === true) {
        researchVideo.pause();
        playButton();
        ResearchVideoState = false;
    } else {
        researchVideo.play();
        pauseButton();
        ResearchVideoState = true;
    }
});

function pauseButton() {
    researchVidButton.innerHTML = `<i class="material-icons">
                                pause
                            </i>`;
}

function playButton() {
    researchVidButton.innerHTML = `<i class="material-icons">
                                play_arrow
                            </i>`;
}