const dropdownButton = document.querySelectorAll('button.dropdown-button');


for (let i = 0; i < dropdownButton.length; i++) {
    dropdownButton[i].addEventListener('click', () => {
        if (dropdownButton[i].nextElementSibling.classList.contains('inactive')) {
            dropdownButton[i].nextElementSibling.classList.remove('inactive');
            dropdownButton[i].nextElementSibling.classList.add('active');
        } else if (dropdownButton[i].nextElementSibling.classList.contains('active')) {
            dropdownButton[i].nextElementSibling.classList.remove('active');
            dropdownButton[i].nextElementSibling.classList.add('inactive');
        }
    });
}

for (let i = 0; i < dropdownButton.length; i++) {
    dropdownButton[i].addEventListener('click', play, false);
    function play() {
        dropdownButton[i].firstElementChild.nextElementSibling.className = "arrow";
        window.requestAnimationFrame(function (time) {
            window.requestAnimationFrame(function (time) {
                dropdownButton[i].firstElementChild.nextElementSibling.className = "arrow rotateup";
            });
        });
    }
}

// document.querySelector(".runButton").addEventListener("click", play, false);
// function play() {
//     document.querySelector(".box").className = "box";
//     window.requestAnimationFrame(function (time) {
//         window.requestAnimationFrame(function (time) {
//             document.querySelector(".box").className = "box changing";
//         });
//     });
// }


