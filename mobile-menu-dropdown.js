const dropdownButton = document.querySelectorAll('button.dropdown-button');
const dropdownItems = document.querySelectorAll('ul.dropdown-items');

for (let i = 0; i < dropdownButton.length; i++) {
    dropdownButton[i].addEventListener('click', () => {
        for (let j = 0; j < dropdownItems.length; j++) {
            if (dropdownItems[j].classList.contains('inactive')) {
                dropdownItems[j].classList.remove('inactive');
                dropdownItems[j].classList.add('active');
            }
        }
    });
}


