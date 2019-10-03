
window.addEventListener('load', () => {

    const dropdownButton = document.querySelectorAll('button.dropdown-button');

    for (let i = 0; i < dropdownButton.length; i++) {
        dropdownButton[i].addEventListener('click', () => {
            console.log('i')
            if (dropdownButton[i].nextElementSibling.classList.contains('active')) {
                dropdownButton[i].nextElementSibling.classList.remove('active');
            } else {
                dropdownButton[i].nextElementSibling.classList.add('active');
            }
        });
    }

});






