const navButton = document.querySelectorAll('.dropdown-nav-button');
let previousButton = document.querySelector('.dropdown-nav-button');
let previousDropdown = previousButton.nextElementSibling;

window.document.addEventListener('click', () => {
    if (previousButton.classList.contains('active')) {
        console.log('hey');
        previousButton.classList.remove('active');
        previousButton.nextElementSibling.style.display = "none";
    }  
});
window.document.addEventListener('touchstart', () => {
    if (previousButton.classList.contains('active')) {
        console.log('hey');
        previousButton.classList.remove('active');
        previousButton.nextElementSibling.style.display = "none";
    }
});


for (let i = 0; i < navButton.length; i++) {
    navButton[i].addEventListener('click', (btn) => {
        if (navButton[i].classList.contains('active')) {
            navButton[i].nextElementSibling.style.display = "none";
            navButton[i].classList.remove('active');
        } else if (previousButton.classList.contains('active')) {
            previousButton.classList.remove('active');
            previousDropdown.style.display = "none";
            navButton[i].classList.add('active');
            navButton[i].nextElementSibling.style.display = "block";
        } else {
            navButton[i].classList.add('active');
            navButton[i].nextElementSibling.style.display = "block";
        }
        previousButton = navButton[i];
        previousDropdown = previousButton.nextElementSibling;
        btn.stopPropagation();
    });
}



